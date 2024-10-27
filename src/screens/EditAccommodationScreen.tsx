import { useNavigation } from "@react-navigation/native";
import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Card,
  Checkbox,
  Button as PaperButton,
  SegmentedButtons,
  Text,
  TextInput,
} from "react-native-paper";

import { getGeocode } from "../api/GoogleMapsAPI";
import alert from "../components/Alert";
import ImageInputList from "../components/ImageInputList";
import { updateAccommodation } from "../graphql/mutations";
import EPropertyType from "../model/EPropertyType";
import IAddress from "../model/IAddress";
import IGeo from "../model/IGeo";
import IUnitFeature from "../model/IUnitFeature";
import { useHostStore } from "../store/host";
import {
  convertArrayToUnitFeature,
  convertUnitFeatureToArray,
  getFeatureLabel,
} from "../utils/UnitFeatureUtil";

const EditAccommodationScreen = (props: any, uriArray: string[]) => {
  const navigation = useNavigation();

  const [imageUris, setImageUris] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [unitFeature, setUnitFeature] = useState<IUnitFeature>({});
  const [address, setAddress] = useState<IAddress>();
  const [propertyType, setPropertyType] = useState("");

  const invokeGoogleMaps = async (address: object) => {
    const resp = await getGeocode(address);
    console.log("geo resp");
    return resp;
  };

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  const handlePriceChange = (text) => {
    const number = text.replace(/[^0-9]/g, "");
    setPrice(number);
  };

  const presetAllValue = () => {
    const details = props.route.params.details;
    console.log(details);
    setTitle(details.title);
    setDescription(details.description);
    setPropertyType(details.propertyType);
    setPrice(details.price.toString());
    setAddress(JSON.parse(details.address));
    setUnitFeature(convertArrayToUnitFeature(details.unitFeature));

    setImageUris(props.route.params.uriArray);
  };

  const CheckboxGroup = ({ unitFeature, setUnitFeature }) => {
    return (
      <View style={styles.checkboxRowGroup}>
        <View style={styles.checkboxColumnGroup}>
          {Object.keys(unitFeature).map((key) => (
            <Checkbox.Item
              key={key}
              label={getFeatureLabel(key)}
              status={unitFeature[key] ? "checked" : "unchecked"}
              onPress={() => {
                console.log(key);
                setUnitFeature((prevUnitFeature) => ({
                  ...prevUnitFeature,
                  [key]: !prevUnitFeature[key],
                }));
              }}
            />
          ))}
        </View>
      </View>
    );
  };

  const onNavigate = async () => {
    console.log("Publish");
    const authUser = await Auth.currentAuthenticatedUser();
    // const s3ObjectKeys = await uploadToStorage(hostStore.images, uuid);
    const geocode = await invokeGoogleMaps(address);
    address.geo = geocode;
    console.log("geo");
    console.log(address.geo);
    const s3ObjectKeys = await uploadToStorage(
      imageUris,
      props.route.params.details.id,
    );
    const newAccomm = {
      id: props.route.params.details.id,
      title,
      address: JSON.stringify(address),
      propertyType: EPropertyType[propertyType],
      images: s3ObjectKeys,
      description,
      price,
      rented: false,
      availableDate: new Date().toISOString().substring(0, 10),
      unitFeature: convertUnitFeatureToArray(unitFeature),
      userId: authUser.attributes.sub,
    };
    console.log("newAccomm");
    console.log(newAccomm);
    const newAccommData = await API.graphql(
      graphqlOperation(updateAccommodation, { input: newAccomm }),
    );
    if (newAccommData.data.updateAccommodation) {
      alert("Update Listing", "Update successful!", [
        {
          text: "OK",
          onPress: () =>
            navigation.navigate("Listing Detail", { id: props.id }),
        },
      ]);
    } else {
      alert("Error", "Update unsuccessful!", [
        {
          text: "Please try again later",
          onPress: () =>
            navigation.navigate("Listing Detail", { id: props.id }),
        },
      ]);
    }
  };

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

  // const submitEdit = () => {
  //     const newAccomm = {
  //         id: props.route.params.details.uuid,
  //         title: title,
  //         address: JSON.stringify(address),
  //         propertyType: EPropertyType[hostStore.propertyType],
  //         images: s3ObjectKeys,
  //         description: hostStore.description,
  //         price: hostStore.price,
  //         rented: false,
  //         availableDate: new Date().toISOString().substring(0, 10),
  //         unitFeature: hostStore.unitFeature,
  //         userId: authUser.attributes.sub,
  //       };
  // }

  useEffect(() => {
    console.log("edit accommodation");
    console.log(props);
    setImageUris(props.route.params.uriArray);
    presetAllValue();
    // console.log(price);
  }, []);

  return (
    <View style={styles.view}>
      <ScrollView automaticallyAdjustKeyboardInsets>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ImageInputList
            imageUris={imageUris}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
          />
        </View>
        <View>
          <Text variant="headlineMedium" style={{ marginTop: 10 }}>
            Accommodation Details
          </Text>
          <SegmentedButtons
            value={propertyType}
            onValueChange={setPropertyType}
            style={{ marginVertical: 20 }}
            buttons={[
              {
                value: EPropertyType.Condo,
                label: EPropertyType.Condo,
                icon: "home-city-outline",
              },
              {
                value: EPropertyType.Landed,
                label: EPropertyType.Landed,
                icon: "home-outline",
              },
              {
                value: EPropertyType.HDB,
                label: EPropertyType.HDB,
                icon: "office-building-outline",
              },
            ]}
          />
          <TextInput
            label="Title"
            placeholder="Enter Title"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            label="Description"
            placeholder="Enter Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <Text variant="headlineMedium">Unit Feature</Text>
          <Card>
            <CheckboxGroup
              unitFeature={unitFeature}
              setUnitFeature={setUnitFeature}
            />
          </Card>
          <Text variant="headlineMedium" style={{ marginBottom: 10 }}>
            Address{" "}
          </Text>
          <TextInput
            label="Country"
            placeholder="Enter your country"
            value={address?.country}
            onChangeText={(text) => setAddress({ ...address, country: text })}
          />
          <TextInput
            label="Postal Code"
            placeholder="Enter your postal code"
            value={address?.postalCode}
            onChangeText={(text) =>
              setAddress({ ...address, postalCode: text })
            }
          />
          <TextInput
            label="Unit Number"
            placeholder="Enter your unit number, not required for landed properties"
            value={address?.unitNo}
            onChangeText={(text) => setAddress({ ...address, unitNo: text })}
          />
          <TextInput
            label="Address Line 1"
            placeholder=""
            value={address?.addressLine1}
            onChangeText={(text) =>
              setAddress({ ...address, addressLine1: text })
            }
          />
          <TextInput
            label="Address Line 2"
            placeholder=""
            value={address?.addressLine2}
            onChangeText={(text) =>
              setAddress({ ...address, addressLine2: text })
            }
          />
          <TextInput
            label="Apt, Suite, etc (optional)"
            placeholder="Enter your apartment, suite name, etc, usually for condo properties"
            value={address?.aptName}
            onChangeText={(text) => setAddress({ ...address, aptName: text })}
          />
          <Text variant="headlineMedium">Edit price</Text>
          <TextInput
            label="Price"
            placeholder="Enter Price"
            left={<TextInput.Affix text="S$  " />}
            keyboardType="number-pad"
            onChangeText={(text) => handlePriceChange(text)}
            value={price}
          />
        </View>
      </ScrollView>

      <View style={styles.next}>
        <PaperButton
          mode="contained"
          onPress={() => onNavigate()}
          style={undefined}
        >
          Next
        </PaperButton>
      </View>
    </View>
  );
};

export default EditAccommodationScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginVertical: 10,
  },
  scroll: {
    flex: 1,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  next: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
  checkboxRowGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  checkboxColumnGroup: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
