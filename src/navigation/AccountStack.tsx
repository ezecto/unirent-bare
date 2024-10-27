import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../screens/Account";
import AccountInfo from "../screens/AccountInfo";
import EditAccommodationScreen from "../screens/EditAccommodationScreen";
import Hosting from "../screens/Hosting";
import HostingStep1 from "../screens/HostingStep1";
import HostingStep2 from "../screens/HostingStep2";
import HostingStep3 from "../screens/HostingStep3";
import HostingStep4 from "../screens/HostingStep4";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import ListingScreen from "../screens/ListingScreen";
import { useTheme } from "react-native-paper";

const Stack = createStackNavigator();

export default function AccountStack({ navigation, route }) {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.background },
      }}
    >
      <Stack.Screen
        name="AccountScreen"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccountInfo"
        component={AccountInfo}
        options={{
          title: "Account Info",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="Hosting"
        component={Hosting}
        options={{
          title: "Becoming a host is easy",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="HostingStep1"
        component={HostingStep1}
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="HostingStep2"
        component={HostingStep2}
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="HostingStep3"
        component={HostingStep3}
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="HostingStep4"
        component={HostingStep4}
        options={{
          title: "",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="My Listing"
        component={ListingScreen}
        options={{
          title: "My Listing",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="Listing Detail"
        component={ListingDetailScreen}
        options={{
          title: "Listing Detail",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
      <Stack.Screen
        name="Edit Listing"
        component={EditAccommodationScreen}
        options={{
          title: "Edit Listing",
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialCommunityIcons name="chevron-left" size={30} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
