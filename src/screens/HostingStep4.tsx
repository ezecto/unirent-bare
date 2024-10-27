import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import {
  ActivityIndicator,
  Divider,
  IconButton,
  Button as PaperButton,
  Text,
} from "react-native-paper";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { getGeocode } from "../api/GoogleMapsAPI";
import alert from "../components/Alert";
import { CarouselImages } from "../components/CarouselImages";
import Map from "../components/Map";
import { createAccommodation } from "../graphql/mutations";
import EPropertyType from "../model/EPropertyType";
import IAccommodation from "../model/IAccommodation";
import IGeo from "../model/IGeo";
import { useHostStore } from "../store/host";
import { isWeb } from "../utils";

const { width, height } = Dimensions.get("window");

async function uploadToStorage(imageUris: any[], uuid: string) {
  const stored = [];
  for (let index = 0; index < imageUris.length; index++) {
    const imageUri = imageUris[index];
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const resp = await Storage.put(uuid + "/image_" + index, blob, {
        contentType: "image/jpeg",
      });
      stored.push(resp.key);
    } catch (err) {
      console.log("Error uploading file: ", err);
    }
  }
  return stored;
}

export default function HostingStep4({ navigation }) {
  const hostStore = useHostStore();
  const ref = useRef<ICarouselInstance>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [geocode, setGeocode] = useState<IGeo>();
  const [formattedAddress, setFormattedAddress] = useState("");

  async function invokeGoogleMaps(address: object) {
    console.log("getting geocode")
    const resp = await getGeocode(address);
    console.log(resp);
    setGeocode(resp?.geometry?.location);
    setFormattedAddress(resp?.formatted_address);
    setIsLoading(false);
  }

  useEffect(() => {
    invokeGoogleMaps(hostStore.address);
  }, []);

  const onPublish = async () => {
    // console.log(hostStore);

    const uuid = nanoid();
    console.log("uuid = " + uuid);
    const s3ObjectKeys = await uploadToStorage(hostStore.images, uuid);
    const authUser = await Auth.currentAuthenticatedUser();

    hostStore.address.geo = geocode;

    // const request: IAccommodation = {
    //   id: uuid,
    //   title: hostStore.title,
    //   address: hostStore.address,
    //   propertyType: EPropertyType[hostStore.propertyType],
    //   images: s3ObjectKeys,
    //   fullDescription: hostStore.description,
    //   price: hostStore.price,
    //   shortDescription: hostStore.description,
    //   rented: false,
    //   availableDate: "2024-01-01",
    //   listedBy: authUser.attributes.sub,
    // };
    // const resp = await publish(request);
    // if (resp.success) {
    //   alert("New Listing", "Publish successful!", [
    //     { text: "OK", onPress: () => navigation.navigate("Hosting") },
    //   ]);
    // } else {
    //   alert("Error", "Publish unsuccessful!", [
    //     {
    //       text: "Please try again later",
    //       onPress: () => navigation.navigate("Hosting"),
    //     },
    //   ]);
    // }
    
    const propertyType = EPropertyType[hostStore.propertyType];
    if (!propertyType) {
      console.error("Invalid property type:", hostStore.propertyType);
      return; // Handle the error accordingly
    }

    // change to graphql
    console.log("Creating new accommodation");
    const newAccomm = {
      id: uuid,
      title: hostStore.title,
      address: JSON.stringify(hostStore.address),
      propertyType: EPropertyType[hostStore.propertyType].toUpperCase(),
      images: s3ObjectKeys,
      description: hostStore.description,
      price: hostStore.price,
      rented: false,
      availableDate: new Date().toISOString().substring(0, 10),
      unitFeature: hostStore.unitFeature,
      latitude: geocode.lat,
      longitude: geocode.lng,
      userId: authUser.attributes.sub,
    };
    const newAccommData = await API.graphql(
      graphqlOperation(createAccommodation, { input: newAccomm }),
    );
    console.log("newAccommData");
    console.log(newAccommData);
    if (newAccommData.data.createAccommodation) {
      alert("New Listing", "Publish successful!", [
        { text: "OK", onPress: () => navigation.navigate("Hosting") },
      ]);
    } else {
      alert("Error", "Publish unsuccessful!", [
        {
          text: "Please try again later",
          onPress: () => navigation.navigate("Hosting"),
        },
      ]);
    }
  };

  if (isLoading) return <ActivityIndicator animating />;
  else
    return (
      <View style={styles.view}>
        <ScrollView style={{ flex: 1 }}>
          {isWeb ? (
            <View style={styles.webContainer}>
              <Carousel
                ref={ref}
                loop
                autoPlay={false}
                width={width}
                height={width / 2}
                style={{ width: "100%" }}
                data={hostStore.images}
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
                data={hostStore.images}
                pagingEnabled
                renderItem={({ item }) => <CarouselImages images={item} />}
              />
            </View>
          )}

          <View style={styles.padding}>
            <Text variant="headlineMedium" style={{ marginBottom: 10 }}>
              {hostStore.title}
            </Text>
            <Divider />
          </View>

          <View style={styles.padding}>
            <Text
              variant="headlineMedium"
              style={{ marginBottom: 10, marginTop: 20 }}
            >
              Description
            </Text>
            <Text variant="bodyLarge">{hostStore.description}</Text>
          </View>

          <View style={styles.padding}>
            <Text
              variant="headlineMedium"
              style={{ marginBottom: 10, marginTop: 20 }}
            >
              UnitFeature
            </Text>
            {hostStore.unitFeature.map((feature) => {
              return <Text>{feature}</Text>;
            })}
          </View>

          <View style={styles.padding}>
            <Text
              variant="headlineMedium"
              style={{ marginBottom: 10, marginTop: 20 }}
            >
              Location
            </Text>
            <Map latitude={geocode.lat} longitude={geocode.lng} />
            <Text variant="bodyLarge">{formattedAddress}</Text>
          </View>

          <View style={styles.padding}>
            <Text
              variant="headlineMedium"
              style={{ marginBottom: 10, marginTop: 20 }}
            >
              Price
            </Text>
            <Text variant="bodyLarge">S$ {hostStore.price}</Text>
          </View>
        </ScrollView>

        <View style={styles.next}>
          <PaperButton mode="contained" onPress={() => onPublish()} style={{}}>
            Publish
          </PaperButton>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 20,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  next: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
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
  padding: { paddingHorizontal: 20 },
});
