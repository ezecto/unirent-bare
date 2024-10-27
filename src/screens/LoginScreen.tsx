/* eslint-disable prettier/prettier */
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { Platform, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const LoginScreen = () => {

  const [errorMessage, setErrorMessage] = useState("");

  const signInWithGoogle = async () => {
    setErrorMessage("");
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      });
      //onLoginSuccess();
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setErrorMessage("Error signing in with Google. Please try again.");
    }
  };

  const redirectToHostedUI = async () => {
    setErrorMessage("");
    try {
      await Auth.federatedSignIn();
      //onLoginSuccess();
    } catch (error) {
      console.error("Error redirecting to hosted UI: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniRent</Text>
      <Text style={styles.subText}>Find your student accommodation easily!</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={redirectToHostedUI}>
            <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={signInWithGoogle}>
            <Text style={styles.buttonText}>Login as University Manager</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7ebff",
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "purple",
  },
  subText: {
    fontSize: 16,
    color: "#4e0085",
    marginBottom: 20,
    textAlign: "center",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    width: Platform.OS === "web" ? width * 0.3 : width * 0.8,
    backgroundColor: "#640064",
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
