import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "react-native-paper";

import AccommodationDetailScreen from "../screens/AccommodationDetailScreen";
import ChatScreen from "../screens/ChatScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import SearchScreen from "../screens/SearchScreen";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function ExploreStack() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.background }, 
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Search Result" component={SearchResultScreen} />
      <Stack.Screen
        name="Accommodation Detail"
        component={AccommodationDetailScreen}
      />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
