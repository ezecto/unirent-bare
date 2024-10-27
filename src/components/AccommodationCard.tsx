import { useNavigation } from "@react-navigation/native";
import { API, Auth, graphqlOperation } from "aws-amplify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Card,
  Button,
  Text,
  Divider,
  Avatar,
  IconButton,
} from "react-native-paper";

import {
  createChatRoom,
  createUserChatRoom,
  updateUser,
} from "../graphql/mutations";
import IAccommodation from "../model/IAccommodation";
import { getCommonChatRoomWithUser } from "../services/ChatRoomService";
import {
  addSavedAccommodation,
  deleteSavedAccommodationById,
} from "../services/SavedAccommodationService";

dayjs.extend(relativeTime);

const AccommodationCard = (props: IAccommodation) => {
  const navigation = useNavigation();
  const [saved, setSaved] = useState(false);
  const [
    savedAccommodationAccommodationID,
    setSavedAccommodationAccommodationID,
  ] = useState("");

  const onContact = async () => {
    // check if have chatroom with user
    const existingChatRoom = await getCommonChatRoomWithUser(props.userId);
    if (existingChatRoom) {
      console.log("Chatroom already exists");
      navigation.navigate("Chat", { id: existingChatRoom.chatRoom.id });
      return;
    }

    console.log("Creating new chatroom");
    const newChatRoomData = await API.graphql(
      graphqlOperation(createChatRoom, { input: {} }),
    );
    if (!newChatRoomData.data?.createChatRoom) {
      console.log("Error creating new chat room");
    }
    const newChatRoom = newChatRoomData.data?.createChatRoom;

    // add clicked user to chatroom
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: { chatRoomId: newChatRoom.id, userId: props.userId },
      }),
    );

    // add auth user to chatroom
    const authUser = await Auth.currentAuthenticatedUser();
    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: { chatRoomId: newChatRoom.id, userId: authUser.attributes.sub },
      }),
    );

    navigation.navigate("Chat", { id: newChatRoom.id });
  };

  const saveToggle = async () => {
    // toggle Saved function
    if (saved) {
      const deleted = await deleteSavedAccommodationById(
        savedAccommodationAccommodationID,
      );
      setSavedAccommodationAccommodationID("");
      if (deleted !== undefined) {
        setSavedAccommodationAccommodationID("");
      } else {
        console.log("delete save failed");
      }
    } else {
      const created = await addSavedAccommodation(
        props.savedAccommodationId,
        props.id,
      );
      if (created !== undefined) {
        setSavedAccommodationAccommodationID(
          created.data.createSavedAccommodationAccommodation.id,
        );
      } else {
        console.log("save failed");
      }
    }
    setSaved(!saved);
    if (props.onRerender !== undefined) {
      props.onRerender();
    }

    // setSavedAccommodationId(props.savedAccommodationId);
  };

  useEffect(() => {
    setSaved(!!props.isSaved);
    setSavedAccommodationAccommodationID(props.isSaved ? props.isSaved.id : "");
  }, [props]);

  return (
    <Card
      style={{
        flex: 1,
        backgroundColor: "#F4EDF9",
        borderColor: "#10161F",
        borderWidth: 0.3,
        marginVertical: 15,
      }}
      onPress={() =>
        navigation.navigate("Accommodation Detail", { id: props.id })
      }
      key={props.id}
    >
      <Card.Cover source={{ uri: props.images[0] }} />

      <View style={{ flex: 1, flexDirection: "row" }}>
        <Card.Title
          title={props.title}
          titleStyle={{ color: "gray" }}
          subtitle={props.address?.aptName}
          subtitleVariant="labelMedium"
          subtitleStyle={{ color: "gray" }}
          style={{ flex: 1 }}
        />
        <IconButton
          icon={saved ? "heart" : "heart-outline"}
          size={25}
          style={{
            marginVertical: 20,
            marginHorizontal: 20,
          }}
          onPress={async () => {
            await saveToggle();

            // setSaved(!saved);
          }}
        />
      </View>
      <Divider />
      <Card.Content style={{ marginVertical: 10 }}>
        <Text style={{ color: "gray" }}>
          S$ {props.price} / month • Available from {props.availableDate}
        </Text>
      </Card.Content>
      <Divider />
      <Card.Content style={{ marginVertical: 10 }}>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <Avatar.Text size={50} label="U" />
          <View
            style={{
              justifyContent: "center",
              marginHorizontal: 10,
              flexDirection: "column",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "gray" }}>
              Listed By {props.User.name}
            </Text>
            <Text style={{ fontSize: 12, color: "gray" }}>
              {dayjs(props.createdAt).fromNow(true)} ago
            </Text>
          </View>
        </View>
        <Button mode="outlined" onPress={() => onContact()}>
          Contact
        </Button>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  blackFont: {
    color: "black",
  },
});

export default AccommodationCard;
