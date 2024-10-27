import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import HomeStack from "./HomeStack";
import { Dimensions, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

export default function AppStack() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [customState, setCustomState] = useState<string | null>(null);

  //   const { width, height } = Dimensions.get("window");
  //   const aspectRatio = height / width;

  //   const isTabletOrWebView = aspectRatio < 1.6; // Assumes 4:3 aspect ratio for tablets

  //   const theme = useTheme(); // Move useTheme inside the component

  //   const styles = StyleSheet.create({
  //     webViewStyles: {
  //       backgroundColor: theme.colors.background,
  //       paddingHorizontal: "20%",
  //     },
  //     phoneViewStyles: {
  //       backgroundColor: theme.colors.background,
  //     },
  //   });

  const handleAuth = async (): Promise<void> => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log("User is already authenticated:", user);
      setIsAuthenticated(true);
    } catch {
      console.log("User is not authenticated, redirecting to login");
      setIsAuthenticated(false); // Explicitly set as false if authentication fails
    }
  };

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setIsAuthenticated(true);
          break;
        case "signOut":
          setIsAuthenticated(false);
          break;
        case "customOAuthState":
          setCustomState(data);
          break;
      }
    });

    handleAuth();

    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return null; // Show the landing screen (or a splash/loading screen)
  }

  return (
    <Stack.Navigator
    //   screenOptions={{
    //     cardStyle: isTabletOrWebView
    //       ? styles.webViewStyles
    //       : styles.phoneViewStyles,
    //   }}
    >
      {isAuthenticated ? (
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="LandingScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
