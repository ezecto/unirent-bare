import { useFocusEffect } from "@react-navigation/native";
import { API, graphqlOperation, Storage } from "aws-amplify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import {
  ActivityIndicator,
  Appbar,
  Avatar,
  Chip,
  Divider,
  IconButton,
  Text,
  Button,
} from "react-native-paper";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { CarouselImages } from "../components/CarouselImages";
import Map from "../components/Map";
import { accommodationsByUserId, getAccommodation } from "../graphql/queries";
import IAccommodation from "../model/IAccommodation";
import IAddress from "../model/IAddress";
import { isWeb } from "../utils";

dayjs.extend(relativeTime);
const { width, height } = Dimensions.get("window");

const ListingDetailScreen = ({ navigation, route }) => {
  const ref = useRef<ICarouselInstance>(null);

  const [accommId, setAccommId] = useState("");
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<IAccommodation>();
  const [uriArray, setUriArray] = useState([]);
  const [address, setAddress] = useState<IAddress>();
  const [rerenderFlag, setRerenderFlag] = useState(false);

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

    console.log("Listing details");
    console.log(data);
    console.log(array);
    console.log(JSON.parse(data.address));
  }

  // useEffect(() => {
  //     setAccommId(route.params.id);
  //     if (accommId) {
  //         fetch();
  //     }
  //   }, [accommId, rerenderFlag]);

  useFocusEffect(
    React.useCallback(() => {
      setAccommId(route.params.id);
      if (accommId) {
        fetch(accommId);
      }
    }, [accommId]),
  );

  if (loading) return <ActivityIndicator animating />;
  else
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <ScrollView>
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 10,
              flexDirection: "row",
            }}
          >
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

            <Text variant="bodyMedium"> {details.address?.addressLine1} </Text>
            <Text variant="bodyMedium"> {details.address?.addressLine2} </Text>
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
            {details?.unitFeature?.map((feature, index) => (
              <Text key={index} variant="bodyMedium">
                {`\u2022 `} {feature}
              </Text>
            ))}
            {/* <Text variant="bodyMedium">{`\u2022 Air-Conditioning `}</Text>
                <Text variant="bodyMedium">{`\u2022 Renovated `}</Text>
                <Text variant="bodyMedium">{`\u2022 Fridge `}</Text>
                <Text variant="bodyMedium">{`\u2022 Cooker Hob/Hood `}</Text>
                <Text variant="bodyMedium">{`\u2022 Washing Machine `}</Text> */}
          </View>
          <Divider />
          <View style={{ marginHorizontal: 10, marginVertical: 15 }}>
            <Text
              variant="titleLarge"
              style={{ fontWeight: "bold", marginBottom: 10 }}
            >
              Location
            </Text>

            <Map latitude={address.geo.lat} longitude={address.geo.lng} />

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
            <Button
              icon="home-edit"
              mode="outlined"
              onPress={() =>
                navigation.navigate("Edit Listing", {
                  details,
                  uriArray,
                })
              }
            >
              Edit
            </Button>
          </View>
        </ScrollView>
      </View>
    );
};

export default ListingDetailScreen;

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
