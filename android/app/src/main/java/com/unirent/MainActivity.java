package com.unirent;

import android.os.Build;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

import expo.modules.ReactActivityDelegateWrapper;

import com.google.android.gms.tasks.Task;
import com.google.android.play.core.integrity.IntegrityManager;
import com.google.android.play.core.integrity.IntegrityManagerFactory;
import com.google.android.play.core.integrity.IntegrityTokenRequest;
import com.google.android.play.core.integrity.IntegrityTokenResponse;

import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class MainActivity extends ReactActivity {

  private IntegrityManager integrityManager;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // Set the theme to AppTheme BEFORE onCreate to support
    // coloring the background, status bar, and navigation bar.
    // This is required for expo-splash-screen.
    setTheme(R.style.AppTheme);
    super.onCreate(null);

    try {
      // Initialize the IntegrityManager
      integrityManager = IntegrityManagerFactory.create(this);

      // Request the integrity token
      requestIntegrityToken();
    } catch (Exception e) {
      Log.e("MainActivity", "Error initializing IntegrityManager: " + e.getMessage());
    }
  }

  private String generateNonce() {
    String nonce = UUID.randomUUID().toString();  // Generate a random UUID as nonce
    try {
      // Play Integrity API requires the nonce to be hashed with SHA-256
      MessageDigest digest = MessageDigest.getInstance("SHA-256");
      byte[] hash = digest.digest(nonce.getBytes());
      return bytesToHex(hash);  // Convert the hash to a hex string
    } catch (NoSuchAlgorithmException e) {
      e.printStackTrace();
    }
    return null;
  }

  private String bytesToHex(byte[] bytes) {
    StringBuilder sb = new StringBuilder();
    for (byte b : bytes) {
      sb.append(String.format("%02x", b));
    }
    return sb.toString();
  }

  private void requestIntegrityToken() {
    // Generate nonce
    String nonce = generateNonce();

    // Create the IntegrityTokenRequest with the nonce
    IntegrityTokenRequest request = IntegrityTokenRequest.builder()
            .setCloudProjectNumber(218530739299L)
            .setNonce(nonce)  // Set the nonce
            .build();

    Task<IntegrityTokenResponse> integrityTokenResponse = integrityManager.requestIntegrityToken(request);

    integrityTokenResponse.addOnSuccessListener(response -> {
      String integrityToken = response.token();
      Log.d("Integrity API", "Token is: " + integrityToken);
      sendTokenToBackend(integrityToken);
    }).addOnFailureListener(e -> {
      Log.e("Integrity API", "Error fetching token: " + e.getMessage(), e);
    }).addOnCompleteListener(task -> {
      if (task.isSuccessful()) {
        Log.d("Integrity API", "Task completed successfully");
      } else {
        Log.e("Integrity API", "Task failed: " + task.getException());
      }
    });
  }

  private void sendTokenToBackend(String token) {

    String backendUrl = "http://10.0.2.2:3000/verify-integrity";

    new Thread(() -> {
      try {
        URL url = new URL(backendUrl);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setDoOutput(true);
        String payload = "{\"integrityToken\":\"" + token + "\"}";
        OutputStream os = conn.getOutputStream();
        byte[] input = payload.getBytes(StandardCharsets.UTF_8);
        os.write(input, 0, input.length);
        os.flush();
        os.close();

        int responseCode = conn.getResponseCode();
        Log.d("Integrity API", String.valueOf(responseCode));
        if (responseCode == HttpURLConnection.HTTP_OK) {
          // If token verification succeeded
          InputStream responseStream = new BufferedInputStream(conn.getInputStream());
          BufferedReader reader = new BufferedReader(new InputStreamReader(responseStream));
          StringBuilder response = new StringBuilder();
          String line;
          while ((line = reader.readLine()) != null) {
            response.append(line);
          }
          reader.close();

          // Parse the response
          JSONObject jsonResponse = new JSONObject(response.toString());
          boolean success = jsonResponse.getBoolean("success");
          String message = jsonResponse.getString("message");

          if (success) {
            Log.d("Integrity API", "Device passed integrity check: " + message);
          } else {
            // Handle root detected case (e.g., prompt user or close the app)
            Log.e("Integrity API", "Root detected: " + message);
            finish();  // Close the app if root detected
          }
        } else {
          Log.e("Integrity API", "Failed to verify token. Response code: " + responseCode);
        }
        conn.disconnect();
      } catch (Exception e) {
        Log.e("Integrity API", "Error sending token to backend: " + e.getMessage());
      }
    }).start();
  }
  /**
   * Returns the name of the main component registered from JavaScript.
   * This is used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "main";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegateWrapper(this, BuildConfig.IS_NEW_ARCHITECTURE_ENABLED, new DefaultReactActivityDelegate(
            this,
            getMainComponentName(),
            // If you opted-in for the New Architecture, we enable the Fabric Renderer.
            DefaultNewArchitectureEntryPoint.getFabricEnabled()));
  }

  /**
   * Align the back button behavior with Android S
   * where moving root activities to background instead of finishing activities.
   * @see <a href="https://developer.android.com/reference/android/app/Activity#onBackPressed()">onBackPressed</a>
   */
  @Override
  public void invokeDefaultOnBackPressed() {
    if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
      if (!moveTaskToBack(false)) {
        // For non-root activities, use the default implementation to finish them.
        super.invokeDefaultOnBackPressed();
      }
      return;
    }

    // Use the default back button implementation on Android S
    // because it's doing more than {@link Activity#moveTaskToBack} in fact.
    super.invokeDefaultOnBackPressed();
  }
}
