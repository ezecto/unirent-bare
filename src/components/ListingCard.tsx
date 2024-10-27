import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Card, Divider, Text } from "react-native-paper";

import IAccommodation from "../model/IAccommodation";

const ListingCard = (props: any) => {
  const navigation = useNavigation();

  return (
    <Card
      style={{
        backgroundColor: "#F4EDF9",
        borderColor: "#10161F",
        borderWidth: 0.3,
        marginVertical: 15,
      }}
      onPress={() => {
        navigation.navigate("Listing Detail", { id: props.id });
      }}
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
      </View>
      <Divider />
      <Card.Content style={{ marginVertical: 10 }}>
        <Text style={{ color: "gray" }}>
          $ {props.price} / month • Available From {props.availableDate}
        </Text>
      </Card.Content>
      <Divider />
    </Card>
  );
};

export default ListingCard;
