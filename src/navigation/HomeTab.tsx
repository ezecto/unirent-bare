import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { useTheme } from "react-native-paper";
import AccountStack from "./AccountStack";
import ChatStack from "./ChatStack";
import ExploreStack from "./ExploreStack";
import Home from "../screens/Home";
import SavedScreen from "../screens/SavedScreen";

const Tab = createMaterialBottomTabNavigator();

export default function HomeTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Explore"
      shifting
      sceneAnimationEnabled={false}
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.onSurface}
      barStyle={{ backgroundColor: theme.colors.surface }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          tabBarIcon: "magnify",
          tabBarLabel: "Explore",
          tabBarColor: "#ffcc00", // Bright yellow
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: "heart-outline",
          tabBarLabel: "Saved",
          tabBarColor: "#ff4081", // Bright pink
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={ChatStack}
        options={{
          tabBarIcon: "message-text-outline",
          tabBarLabel: "Inbox",
          tabBarColor: "#40c4ff", // Bright blue
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: "account-outline",
          tabBarLabel: "Account",
          tabBarColor: "#4caf50", // Bright green
        }}
      />
    </Tab.Navigator>
  );
}
