import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  ActivityIndicator,
  Avatar,
  Card,
  Divider,
  IconButton,
  Text,
} from "react-native-paper";

import ListingCard from "../components/ListingCard";
import { accommodationsByUserId } from "../graphql/queries";
import IAccommodation from "../model/IAccommodation";

const ListingScreen = (props: any) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [accommodationList, setAccommodationList] =
    useState<IAccommodation[]>();

  async function fetch() {
    const authUser = await Auth.currentAuthenticatedUser();
    const userId = authUser.attributes.sub;
    const resp = await API.graphql(
      graphqlOperation(accommodationsByUserId, {
        userId,
      }),
    );
    await downloadFromStorage(resp.data?.accommodationsByUserId?.items);
  }

  async function downloadFromStorage(data: IAccommodation[]) {
    // download first image from each listing and replace images array
    for (let i = 0; i < data.length; i++) {
      await Storage.get(data[i].images[0])
        .then((uri) => {
          data[i].images.length = 0; // clear array
          data[i].images.push(uri); // push first image uri
        })
        .catch((err) => console.log("Error downloading file:" + err));
    }
    setAccommodationList(data);
    setIsLoading(false);
  }

  const EmptyAccommodation = () => {
    return (
      <>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Avatar.Icon
            size={80}
            icon="emoticon-sad"
            color="#f1e9e9"
            style={{ backgroundColor: "white" }}
          />
        </View>
        <Text>You do not have any accommodation listing right now</Text>
      </>
    );
  };

  // fetch all Listings
  // useEffect(() => {
  //     // getSavedAccommodations();
  //     fetch();
  //     console.log(accommodationList);
  // }, [props]);

  useFocusEffect(
    React.useCallback(() => {
      fetch();
    }, []),
  );

  if (isLoading) return <ActivityIndicator animating />;
  if (accommodationList.length === 0) return EmptyAccommodation();
  else
    return (
      <View style={styles.view}>
        <ScrollView style={styles.scroll}>
          {accommodationList.map((accommodation, index) => (
            <ListingCard {...accommodation} key={index} />
          ))}

          {/* If no listing available */}
          {/* <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
                    <Avatar.Icon size={80} icon="emoticon-sad" color='#f1e9e9' style={{backgroundColor: 'white'}} />
                </View>
                <Text style={{verticalAlign: 'middle'}}>
                    You do not have any accommodation listing right now 
                </Text> */}
        </ScrollView>
      </View>
    );
};

export default ListingScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 10,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
