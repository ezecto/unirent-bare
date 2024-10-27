import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { Avatar, Divider, Text } from "react-native-paper";

import { onUpdateChatRoom } from "../graphql/subscriptions";

dayjs.extend(relativeTime);

export default function ChatRoom(props: any) {
  const navigation = useNavigation();
  const [chatRoom, setChatRoom] = useState(props.chatRoom);
  console.log(props);

  // subscribe to chatroom for updates
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdateChatRoom, {
        filter: { id: { eq: props.chatRoom.id } },
      }),
    ).subscribe({
      next: ({ value }) => {
        setChatRoom((cr) => ({
          ...(cr || {}),
          ...value.data.onUpdateChatRoom,
        }));
      },
      error: (err) => console.warn(err),
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [props.chatRoom.id]);

  const user = props.chatRoom.Users?.items?.[0]?.user;
  const accommodation = chatRoom.Accommodation;

  if (!user || !accommodation) {
    return null; // or you can return a loading indicator or some fallback UI
  }

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Chat", {
          id: props.chatRoom.id,
          name: user.name,
          title: accommodation.title,
          price: accommodation.price,
        })
      }
    >
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 20 }}>
        <Avatar.Text size={50} label="U" />
        <View style={{ flexDirection: "column", marginHorizontal: 15 }}>
          <Text variant="labelMedium" style={{ color: "gray" }}>
            {user.name}
          </Text>
          <Text variant="titleMedium"> {accommodation.title} </Text>
          <Text variant="labelMedium" style={{ color: "gray" }}>
            {chatRoom.LastMessage?.text}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row-reverse" }}>
          <Text variant="labelMedium" style={{ color: "gray" }}>
            {dayjs(chatRoom.LastMessage?.createdAt).fromNow(true)} ago
          </Text>
        </View>
      </View>
      <Divider />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  blackFont: {
    color: "black",
  },
});
