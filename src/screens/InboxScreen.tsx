import { Auth, API, graphqlOperation } from "aws-amplify";
import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ChatRoom from "../components/ChatRoom";
import { getInbox } from "../services/ChatRoomService";

export default function InboxScreen(props: any) {
  const insets = useSafeAreaInsets();
  const [chatRooms, setChatRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchChatRooms = async () => {
    setLoading(true);
    const authUser = await Auth.currentAuthenticatedUser();

    const response = await API.graphql(
      graphqlOperation(getInbox, { id: authUser.attributes.sub }),
    );

    const rooms = response?.data?.getUser?.ChatRooms?.items?.filter(
      (item) => !item._deleted,
    );
    const sortedRooms = rooms.sort(
      (r1, r2) =>
        new Date(r2.chatRoom.updatedAt) - new Date(r1.chatRoom.updatedAt),
    );

    setChatRooms(sortedRooms);
    setLoading(false);
  };

  useEffect(() => {
    fetchChatRooms();
  }, []);

  if (loading) return <ActivityIndicator animating />;
  else
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginHorizontal: 20,
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <View style={{ marginTop: 25, marginBottom: 10 }}>
          <Text variant="displaySmall"> Inbox </Text>
        </View>

        {chatRooms.length === 0 ? (
          <View style={{ flex: 1 }}>
            <Text variant="titleMedium" style={{}}>
              You have no unread messages
            </Text>
            <Text variant="bodyMedium" style={{ color: "gray" }}>
              When you contact a host, you will see your messages here
            </Text>
          </View>
        ) : (
          <ScrollView style={{ flex: 1, flexDirection: "column" }}>
            {chatRooms.map((chatRoom, index) => {
              return <ChatRoom {...chatRoom} key={index} />;
            })}
          </ScrollView>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  blackFont: {
    color: "black",
  },
});
