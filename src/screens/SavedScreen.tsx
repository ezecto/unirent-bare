import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  Searchbar,
  Divider,
  Card,
  Text,
  ActivityIndicator,
  useTheme,
} from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";

import AccommodationCard from "../components/AccommodationCard";
import { getUser } from "../graphql/queries";
import IAccommodation from "../model/IAccommodation";
import { getSavedAccommodationsById } from "../services/SavedAccommodationService";

const SavedScreen = (props: any) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [savedAccommodationId, setSavedAccommodationId] = useState("");
  const [saved, setSaved] = useState<any[]>([]);
  const [accommodationList, setAccommodationList] =
    useState<IAccommodation[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [rerenderFlag, setRerenderFlag] = useState(false);
  const isFocused = useIsFocused();

  async function fetch() {
    const authUser = await Auth.currentAuthenticatedUser();
    const userId = authUser.attributes.sub;
    const userInfo = await API.graphql(
      graphqlOperation(getUser, {
        id: userId,
      }),
    );

    const savedAccommodationId = userInfo.data.getUser.userSavedAccommodationId;
    console.log(savedAccommodationId);
    setSavedAccommodationId(savedAccommodationId);

    const savedAccommodationList =
      await getSavedAccommodationsById(savedAccommodationId);
    setSaved(savedAccommodationList);
    const accommodationList = savedAccommodationList.map((item) => {
      return item.accommodation;
    });

    await downloadFromStorage(accommodationList);

    // // console.log(savedAccommodation.data.getUser.SavedAccommodation.Accommodations.items);
    // console.log("SavedScreen");
    // setAccommodationList(savedAccommodationList);
    // console.log(accommodationList)
  }

  async function downloadFromStorage(data: IAccommodation[]) {
    console.log("saved");
    console.log(data);
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

  function returnAccommodationCard(
    accommodation: IAccommodation,
    index: number,
  ) {
    let savedId = "";
    if (saved !== undefined) {
      savedId = saved.find((e) => {
        if (e.accommodationId === accommodation.id) {
          return e.id;
        } else {
          return "";
        }
      });
      console.log("savedId = " + savedId);
    }
    return (
      <AccommodationCard
        {...accommodation}
        key={index}
        isSaved={savedId}
        savedAccommodationId={savedAccommodationId}
        onRerender={() => setRerenderFlag(!rerenderFlag)}
      />
    );
  }

  useEffect(() => {
    if (isFocused) {
      fetch();
    }
  }, [props, isFocused, rerenderFlag]);

  if (isLoading) return <ActivityIndicator animating />;
  else
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: theme.colors.background, 
        }}
      >
        <View style={{ marginTop: 25, marginBottom: 10, marginHorizontal: 20 }}>
          <Text variant="displaySmall"> Saved </Text>
        </View>

        <ScrollView
          style={{
            flex: 1,
            flexDirection: "column",
            paddingHorizontal: 15,
          }}
        >
          <View style={{ marginVertical: 10, flexDirection: "column" }}>
            {accommodationList.map((accommodation, index) =>
              returnAccommodationCard(accommodation, index),
            )}
          </View>
        </ScrollView>
      </View>
    );
};

export default SavedScreen;
