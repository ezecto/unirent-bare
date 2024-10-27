import { View } from "react-native";
import { Divider, List, Text } from "react-native-paper";

import Button from "../components/Button";

export default function Hosting({ navigation }) {
  return (
    <View style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }}>
      <List.Section>
        <List.Item
          title={<Text> Provide information about your place </Text>}
          description="Share some basic info, such as the location and how many students can stay."
          left={() => <List.Icon icon="roman-numeral-1" />}
        />
        <Divider />
        <List.Item
          title={<Text> Make it stand out </Text>}
          description="Add photos plus a title and description."
          left={() => <List.Icon icon="roman-numeral-2" />}
        />
        <Divider />
        <List.Item
          title={<Text> Finalize and publish </Text>}
          description="Set a starting price and publish your listing."
          left={() => <List.Icon icon="roman-numeral-3" />}
        />
      </List.Section>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("HostingStep1")}
        style={undefined}
      >
        Get started
      </Button>
    </View>
  );
}
