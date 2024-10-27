import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { Auth } from "aws-amplify";
import { View, StyleSheet, Platform, Linking } from "react-native";
import { Divider, List, Text } from "react-native-paper";

export default function Account({ navigation }) {
  const handleSignOut = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      const isPartner = authUser.username.substring(0, 6) === "google";
      if (isPartner) {
        const signOutUrl = "https://accounts.google.com/Logout";
        if (Platform.OS === "web") {
          window.open(signOutUrl);
          await Auth.signOut({ global: true });
        } else {
          await Auth.signOut({ global: true });
          Linking.openURL(signOutUrl);
        }
      } else {
        await Auth.signOut({ global: true });
      }
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  return (
    <View style={styles.view}>
      <List.Section>
        <List.Subheader>
          <Text variant="titleLarge">Settings</Text>
        </List.Subheader>
        <List.Item
          title={<Text> Account information </Text>}
          left={() => <List.Icon icon="account-outline" />}
          onPress={() => navigation.navigate("AccountInfo")}
        />
        <Divider />
      </List.Section>

      <List.Section>
        <List.Subheader>
          <Text variant="titleLarge">Hosting</Text>
        </List.Subheader>
        <List.Item
          title={<Text> Add Listing </Text>}
          left={() => <List.Icon icon="home-plus-outline" />}
          onPress={() => navigation.navigate("Hosting")}
        />
        <Divider />
        <List.Item
          title={<Text> My Listing </Text>}
          left={() => <List.Icon icon="home-import-outline" />}
          onPress={() => navigation.navigate("My Listing")}
        />
        <Divider />
      </List.Section>

      <View
        style={{ flex: 2, flexDirection: "column-reverse", paddingBottom: 20 }}
      >
        <Divider />
        <List.Item
          title={<Text> Sign out </Text>}
          left={() => <List.Icon icon="logout" />}
          onPress={handleSignOut}
          style={{ alignSelf: "center" }}
        />
        <Divider />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 50,
  },
  blackFont: {
    color: "black",
  },
});
