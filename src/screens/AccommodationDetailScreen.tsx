import { useIsFocused } from "@react-navigation/native";
import { API, graphqlOperation, Storage } from "aws-amplify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, View, StyleSheet } from "react-native";
import {
  Appbar,
  Text,
  Chip,
  Divider,
  Avatar,
  Button,
  IconButton,
  ActivityIndicator,
} from "react-native-paper";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { CarouselImages } from "../components/CarouselImages";
import Map from "../components/Map";
import { getAccommodation } from "../graphql/queries";
import IAccommodation from "../model/IAccommodation";
import IAddress from "../model/IAddress";
import { isWeb } from "../utils";

dayjs.extend(relativeTime);
const { width, height } = Dimensions.get("window");

export default function AccommodationDetailScreen({ navigation, route }) {
  const accommId = route.params.id;
  const isFocused = useIsFocused();

  const ref = useRef<ICarouselInstance>(null);

  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<IAccommodation>();
  const [uriArray, setUriArray] = useState([]);
  const [address, setAddress] = useState<IAddress>();

  async function fetch() {
    const resp = await API.graphql(
      graphqlOperation(getAccommodation, {
        id: accommId,
      }),
    );
    await downloadFromStorage(resp.data?.getAccommodation);
  }

  async function downloadFromStorage(data: IAccommodation) {
    const array = [];
    for (let i = 0; i < data.images.length; i++) {
      await Storage.get(data.images[i])
        .then((uri) => {
          array.push(uri);
        })
        .catch((err) => console.log("Error downloading file:" + err));
    }
    setDetails(data);
    setUriArray(array);
    setAddress(JSON.parse(data.address));
    setLoading(false);

    console.log("data");
    console.log(data);
    console.log(JSON.parse(data.address));
  }

  // fetch accomm details
  useEffect(() => {
    fetch();
  }, [navigation, route]);

  if (loading) return <ActivityIndicator animating />;
  else
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View style={{ flexDirection: "row-reverse", flex: 1 }}>
            <Appbar.Action
              icon={saved ? "heart" : "heart-outline"}
              size={25}
              onPress={() => {
                console.warn("Save accommodation");
                setSaved(!saved);
              }}
            />
          </View>
        </Appbar.Header>
        <ScrollView>
          <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <Text variant="headlineMedium" style={{ fontWeight: "bold" }}>
              {details.title}
            </Text>
          </View>

          {isWeb ? (
            <View style={styles.webContainer}>
              <Carousel
                ref={ref}
                loop
                autoPlay={false}
                width={width}
                height={width / 2}
                style={{ width: "100%" }}
                data={uriArray}
                pagingEnabled
                renderItem={({ item }) => <CarouselImages images={item} />}
              />
              <View style={styles.webButtons}>
                <IconButton
                  icon="menu-left"
                  size={30}
                  onPress={() => {
                    ref.current?.scrollTo({ count: -1, animated: true });
                  }}
                />
                <IconButton
                  icon="menu-right"
                  size={30}
                  onPress={() => {
                    ref.current?.scrollTo({ count: 1, animated: true });
                  }}
                />
              </View>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <Carousel
                ref={ref}
                loop
                autoPlay={false}
                width={width}
                height={width / 2}
                style={{ width: "100%" }}
                data={uriArray}
                pagingEnabled
                renderItem={({ item }) => <CarouselImages images={item} />}
              />
            </View>
          )}

          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
              S$ {details.price} / month
            </Text>
            <View style={{ flexDirection: "row", flex: 1, marginVertical: 10 }}>
              <Chip style={{ marginRight: 10, alignSelf: "flex-start" }}>
                {details.propertyType}
              </Chip>
              <Chip style={{ marginRight: 10, alignSelf: "flex-start" }}>
                Available Now
              </Chip>
            </View>
          </View>
          <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 10 }}>
              <Text variant="bodyMedium"> Available Date </Text>
              <Text variant="bodyMedium">{`\u2022 `}</Text>
              <Text variant="bodyMedium">{details.availableDate} </Text>
            </View>

            <Text variant="bodyMedium"> 441B Clementi Avenue </Text>
            <Text variant="bodyMedium"> Clementi Road 1 </Text>
          </View>
          <Divider />
          <View style={{ marginHorizontal: 10, marginVertical: 15 }}>
            <Text
              variant="titleLarge"
              style={{ fontWeight: "bold", marginBottom: 10 }}
            >
              Description
            </Text>
            <Text variant="bodyMedium">{details.description}</Text>
          </View>
          <Divider />
          <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <Text
              variant="titleLarge"
              style={{ fontWeight: "bold", marginBottom: 10 }}
            >
              Unit Features
            </Text>
            <Text variant="bodyMedium">{`\u2022 Air-Conditioning `}</Text>
            <Text variant="bodyMedium">{`\u2022 Renovated `}</Text>
            <Text variant="bodyMedium">{`\u2022 Fridge `}</Text>
            <Text variant="bodyMedium">{`\u2022 Cooker Hob/Hood `}</Text>
            <Text variant="bodyMedium">{`\u2022 Washing Machine `}</Text>
          </View>
          <Divider />
          <View style={{ marginHorizontal: 10, marginVertical: 15 }}>
            <Text
              variant="titleLarge"
              style={{ fontWeight: "bold", marginBottom: 10 }}
            >
              Location
            </Text>


            {address?.geo?.lat && address?.geo?.lng ? (
              <Map latitude={address.geo.lat} longitude={address.geo.lng} />
            ) : (
              <Text variant="bodyMedium">Location data not available</Text>
            )}

            <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
              441B Clementi Avenue
            </Text>
            <Text variant="bodyMedium" style={{}}>
              {address.country} {address.postalCode}
            </Text>
            <Text variant="bodyMedium" style={{}}>
              {address.addressLine1}
            </Text>
          </View>
          <Divider />
          <View style={{ marginHorizontal: 20, marginVertical: 15 }}>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <Avatar.Text size={50} label="U" />
              <View
                style={{
                  justifyContent: "center",
                  marginHorizontal: 10,
                  flexDirection: "column",
                }}
              >
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                  {details.User.name}
                </Text>
                <Text style={{ fontSize: 12 }}>
                  Joined {dayjs(details.User.createdAt).fromNow(true)} ago
                </Text>
              </View>
            </View>

            <Button
              mode="outlined"
              onPress={() => console.warn("navigate to message screen")}
            >
              Contact
            </Button>
          </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    height: "100%",
    width,
    alignSelf: "center",
    margin: "auto",
  },
  webButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
