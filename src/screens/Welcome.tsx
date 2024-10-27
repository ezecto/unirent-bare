import { useIsFocused, useNavigation } from "@react-navigation/native";
import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { View, ScrollView, Pressable, StyleSheet } from "react-native";
import {
  Searchbar,
  Divider,
  Card,
  Text,
  ActivityIndicator,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getRecommendation } from "../api/AccommodationAPI";
import AccommodationCard from "../components/AccommodationCard";
import { createSavedAccommodation, updateUser } from "../graphql/mutations";
import {
  getUser,
  savedAccommodationAccommodationsBySavedAccommodationId,
} from "../graphql/queries";
import IAccommodation from "../model/IAccommodation";
import {
  addSavedAccommodation,
  deleteSavedAccommodationById,
  getSavedAccommodationsById,
} from "../services/SavedAccommodationService";
import { isWeb } from "../utils";
import EPropertyType from "../model/EPropertyType";


// const images = [
//   "https://cdn-cms.pgimgs.com/static/2021/06/958-Hougang-Street-91-Hougang-Punggol-Sengkang-Singapore.jpg",
//   "https://cdn-cms.pgimgs.com/static/2021/06/375-Clementi-Avenue-4-Buona-Vista-West-Coast-Clementi-New-Town-Singapore.jpg"
// ];

// const accommodationList: IAccommodation[] = [
//   {
//     id: "0001",
//     title: "Clementi Condominium",
//     propertyType: EPropertyType.Condo,
//     price: 1000,
//     description: "full description",
//     // shortDescription: "short description",
//     // fullDescription: "full description full descriprtion",
//     rented: false,
//     unitFeature: [
//       "Air-Conditioning",
//       "Renovated",
//       "Fridge",
//       "Cooker Hob/Hood",
//       "Washing Machine",
//     ],
//     availableDate: "2023-07-01",
//     address: {
//       country: "Singapore",
//       postalCode: "520111",
//       unitNo: "01-01",
//       aptName: "Clementi Avenue Block 100",
//       addressLine1: "",
//       addressLine2: "",
//       geo: undefined,
//       street: ""
//     },
//     images,
//     userId: "userId",
//     User: "user",
//     createdAt: "2022-02-03"
//   },
// ];

export default function Welcome({ props }) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [saved, setSaved] = useState([]);
  // const [savedAccommodationIds, setSavedAccommodationIds] = useState([]);
  const [savedAccommodationId, setSavedAccommodationId] = useState("");
  const [accommodationList, setAccommodationList] =
    useState<IAccommodation[]>();
  const isFocused = useIsFocused();
  const [permission, setPermission] = useState(false);

  

  async function fetch() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      setIsLoading(false);
      return;
    }
    setPermission(true);

    const location = await Location.getCurrentPositionAsync({});
    const recommendations = await getRecommendation(location);
    await downloadFromStorage(recommendations);
  }

  async function createNewSavedAccommodationId(userId) {
    // createSavedAccommodation
    const userSavedAccommodaiton = await API.graphql(
      graphqlOperation(createSavedAccommodation, {
        input: { savedAccommodationUserId: userId },
      }),
    );

    const updateUserInfo = await API.graphql(
      graphqlOperation(updateUser, {
        input: {
          id: userId,
          userSavedAccommodationId:
            userSavedAccommodaiton.data.createSavedAccommodation.id,
        },
      }),
    );

    return updateUserInfo.data.updateUser.userSavedAccommodationId;
  }

  async function getSavedAccommodations() {
    const authUser = await Auth.currentAuthenticatedUser();
    const userId = authUser.attributes.sub;
    let userSavedAccoimmodationId = "";
    const userInfo = await API.graphql(
      graphqlOperation(getUser, {
        id: userId,
      }),
    );

    console.log(userInfo);

    if (!userInfo.data.getUser.userSavedAccommodationId) {
      const savedAccommId = await createNewSavedAccommodationId(
        authUser.attributes.sub,
      );
      setSavedAccommodationId(savedAccommId);
      userSavedAccoimmodationId = savedAccommId;
    } else {
      userSavedAccoimmodationId =
        userInfo.data.getUser.userSavedAccommodationId;
      setSavedAccommodationId(userInfo.data.getUser.userSavedAccommodationId);
    }

    const savedAccommodationList = await getSavedAccommodationsById(
      userSavedAccoimmodationId,
    );
    setSaved(savedAccommodationList);
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

  function returnAccommodationCard(
    accommodation: IAccommodation,
    index: number,
  ) {
    let savedId = "";
    if (saved !== undefined) {
      if (saved.length > 0) {
        savedId = saved.find((e) => {
          if (e.accommodationId === accommodation.id) {
            return e;
          } else {
            return "";
          }
        });
      }
    }

    return (
      <AccommodationCard
        {...accommodation}
        key={index}
        isSaved={savedId}
        savedAccommodationId={savedAccommodationId}
      />
    );
  }

  const searchBar = () => {
    return isWeb ? (
      <Pressable
        style={{ width: "90%" }}
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        <Searchbar
          placeholder="Search Location"
          onChangeText={(query) => {
            setSearch(query);
          }}
          value={search}
          style={{ width: "100%" }}
        />
      </Pressable>
    ) : (
      <Searchbar
        placeholder="Search Location"
        onPressIn={() => {
          navigation.navigate("Search");
        }}
        onChangeText={(query) => {
          setSearch(query);
        }}
        value={search}
        style={{ width: "90%" }}
      />
    );
  };

  // fetch all Listings
  useEffect(() => {
    if (isFocused) {
      getSavedAccommodations();
      fetch();
    }
  }, [props, isFocused]);


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
        }}
      >
        <View style={{ alignItems: "center", marginVertical: 15 }}>
          {searchBar()}
        </View>
        <Divider />
        <ScrollView
          style={{
            flex: 1,
            flexDirection: "column",
            paddingHorizontal: 15,
          }}
        >
          <View style={{ marginVertical: 10, flexDirection: "column" }}>
            <Text variant="titleLarge"> Today's Recommendations </Text>

            {!permission ? (
              <Text variant="bodyLarge" style={{ marginTop: 10 }}>
                Allow permission to access device location to receive
                recommendations
              </Text>
            ) : (
              <>
                {accommodationList.map((accommodation, index) =>
                  returnAccommodationCard(accommodation, index),
                )}
              </>
            )}
          </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  blackFont: {
    color: "black",
  },
});
