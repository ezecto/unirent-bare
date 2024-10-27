import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import { View, ScrollView, Pressable } from "react-native";
import {
  ActivityIndicator,
  Divider,
  Searchbar,
  Text,
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import AccommodationCard from "../components/AccommodationCard";
import { PropertyEnum } from "../graphql/API";
import { createSavedAccommodation, updateUser } from "../graphql/mutations";
import { getUser } from "../graphql/queries";
import EPropertyType from "../model/EPropertyType";
import IAccommodation from "../model/IAccommodation";
import { fetchSearchAccommodation } from "../services/AccommodationService";
import { getSavedAccommodationsById } from "../services/SavedAccommodationService";
import { isWeb } from "../utils";

const SearchResultScreen = (props: any) => {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [saved, setSaved] = useState<any[]>();
  // const [savedAccommodationIds, setSavedAccommodationIds] = useState([]);
  const [savedAccommodationId, setSavedAccommodationId] = useState("");
  const [accommodationList, setAccommodationList] =
    useState<IAccommodation[]>();

  const isFocused = useIsFocused();

  const navigation = useNavigation();

  // const images = [
  //   "https://media.karousell.com/media/photos/products/2019/07/02/master_room_for_rent_at_clementi_1562052953_90c3c04e0_progressive",
  //   "https://cdn-cms.pgimgs.com/static/2021/06/958-Hougang-Street-91-Hougang-Punggol-Sengkang-Singapore.jpg",
  //   "https://media.karousell.com/media/photos/products/2020/7/28/shunfu_road_hdb_room_rental_1595903271_2f1e723b_progressive",
  // ];

  // const accommodationList: IAccommodation[] = [
  //   {
  //     id: "0001",
  //     title: "Clementi Condominium",
  //     propertyType: EPropertyType.Condo,
  //     price: 1000,
  //     shortDescription: "short description",
  //     fullDescription: "full description full descriprtion",
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
  //     },
  //     images,
  //     listedBy: "user1",
  //   },
  // ];

  async function fetch(searchCriteria) {
    // const resp = await getAll();
    console.log(searchCriteria);
    console.log("hit graphql now");
    const resp = await API.graphql(
      graphqlOperation(fetchSearchAccommodation(searchCriteria)),
    );

    console.log("resp");
    console.log(resp);
    await downloadFromStorage(resp.data?.listAccommodations?.items);
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

  useEffect(() => {
    if (isFocused) {
      console.log("SEARCH RESULT PROPS");
      console.log(props);
      const { searchCriteria } = props.route.params;
      console.log("call again");
      getSavedAccommodations();
      fetch(searchCriteria);
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
            <Text variant="titleLarge">
              Showing results for {"\n"}
              {props.route.params?.searchCriteria?.query}
            </Text>

            {accommodationList.map((accommodation, index) =>
              returnAccommodationCard(accommodation, index),
            )}
          </View>
        </ScrollView>
      </View>
    );
};

export default SearchResultScreen;
