import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { Auth } from "aws-amplify";
import { Divider, List } from "react-native-paper";

async function changePassword(oldPassword: string, newPassword: string) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const data = await Auth.changePassword(user, oldPassword, newPassword);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export default function AccountInfo({ navigation }) {
  const { user } = useAuthenticator((context) => [context.user]);
  console.log(user);

  return (
    <List.Section>
      <List.Item title="Username" description={user.username} />
      <Divider />
      <List.Item title="Email" description={user.attributes.email} />
      <Divider />
      <List.Item title="Password" description="Tap to edit" />
      <Divider />
    </List.Section>
  );
}
