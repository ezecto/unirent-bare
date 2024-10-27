import { Auth, API, graphqlOperation } from "aws-amplify";
import { useEffect, useRef, useState } from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import {
  ActivityIndicator,
  Appbar,
  Button,
  Surface,
  Text,
  TextInput,
} from "react-native-paper";

import Message from "../components/Message";
import { createMessage, updateChatRoom } from "../graphql/mutations";
import { listMessagesByChatRoom } from "../graphql/queries";
import { onCreateMessage } from "../graphql/subscriptions";

export default function ChatScreen({ navigation, route }) {
  const chatroomID = route.params.id;
  const name = route.params.name;
  const title = route.params.title;
  const price = route.params.price;

  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const scrollViewRef = useRef();

  // fetch Messages
  useEffect(() => {
    API.graphql(
      graphqlOperation(listMessagesByChatRoom, {
        chatRoomId: chatroomID,
        sortDirection: "DESC",
      }),
    ).then((result) => {
      setMessages(result.data?.listMessagesByChatRoom?.items);
    });

    // subscribe to new messages
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage, {
        filter: { chatRoomId: { eq: chatroomID } },
      }),
    ).subscribe({
      next: ({ value }) => {
        setMessages((m) => [value.data.onCreateMessage, ...m]);
      },
      error: (err) => console.warn(err),
    });

    setLoading(false);

    return () => {
      subscription.unsubscribe();
    };
  }, [chatroomID]);

  const onSend = async (event) => {
    if ((event.key === "Enter" && !event.shiftKey) || event.type === "click") {
      const authUser = await Auth.currentAuthenticatedUser();

      const newMessage = {
        chatRoomId: chatroomID,
        text,
        userId: authUser.attributes.sub,
      };
      const newMessageData = await API.graphql(
        graphqlOperation(createMessage, { input: newMessage }),
      );

      setText("");

      // set the new message as LastMessage of the ChatRoom
      await API.graphql(
        graphqlOperation(updateChatRoom, {
          input: {
            chatRoomLastMessageId: newMessageData.data.createMessage.id,
            id: chatroomID,
          },
        }),
      );
    }
  };

  if (loading) return <ActivityIndicator animating />;
  else
    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text variant="titleLarge">{name}</Text>
            <Text variant="labelMedium" style={{ color: "gray" }}>
              Active 40 minutes ago
            </Text>
          </View>
        </Appbar.Header>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Surface
            elevation={4}
            style={{ height: 95, justifyContent: "center" }}
          >
            <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
              {/* <Image
              source={{ uri: props.images[0] }}
              style={{ height: 65, width: 65, borderRadius: 15 }}
            /> */}
              <View>
                <Text variant="labelLarge" style={{ marginLeft: 10 }}>
                  {title}
                </Text>
                <Text
                  variant="labelMedium"
                  style={{ marginLeft: 10, color: "gray" }}
                >
                  S$ {price} / month
                </Text>
                <Button
                  mode="contained"
                  style={{ marginLeft: 10, marginTop: 5 }}
                >
                  <Text variant="labelSmall" style={{ color: "white" }}>
                    Rent Now
                  </Text>
                </Button>
              </View>
            </View>
          </Surface>

          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current?.scrollToEnd({
                animated: true,
              })
            }
            style={{
              flex: 1,
              flexDirection: "column",
              padding: 10,
            }}
          >
            {messages.toReversed().map((message, index) => {
              return <Message {...message} key={index} />;
            })}
          </ScrollView>

          <TextInput
            placeholder="Type here..."
            right={<TextInput.Icon icon="send" onPress={onSend} />}
            value={text}
            onChangeText={setText}
            multiline
            onKeyPress={onSend}
          />
        </View>
      </View>
    );
}
