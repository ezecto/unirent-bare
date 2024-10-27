import { createStackNavigator } from "@react-navigation/stack";

import ChatScreen from "../screens/ChatScreen";
import InboxScreen from "../screens/InboxScreen";
import { useTheme } from "react-native-paper";

const Stack = createStackNavigator();

export default function ChatStack() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="InboxScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Stack.Screen name="InboxScreen" component={InboxScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}
