import { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  Button as PaperButton,
  SegmentedButtons,
  Text,
  TextInput,
} from "react-native-paper";

import Counter from "../components/Counter";
import EPropertyType from "../model/EPropertyType";
import IAddress from "../model/IAddress";
import { useHostStore } from "../store/host";

export default function HostingStep1({ navigation, route }) {
  if (route.state) {
    navigation.setOptions({
      tabBarVisible: !(route.state.index > 0),
    });
  }
  // console.log(navigation);
  // console.log(route);

  const [propertyType, setPropertyType] = useState("");
  const [address, setAddress] = useState<IAddress>();
  // const [guest, setGuest] = useState(0);
  // const [bed, setBed] = useState(0);
  // const [bath, setBath] = useState(0);

  // initialize zustand store methods
  const updatePropertyType = useHostStore((state) => state.updatePropertyType);
  // const updateMaxGuest = useHostStore((state) => state.updateMaxGuest);
  // const updateMaxBed = useHostStore((state) => state.updateMaxBed);
  // const updateMaxBath = useHostStore((state) => state.updateMaxBath);
  const updateAddress = useHostStore((state) => state.updateAddress);

  const onNavigate = () => {
    if (!propertyType) {
      alert("Please select a property type before proceeding.");
      return;
    }

    // update zustand store
    updatePropertyType(propertyType);
    // updateMaxGuest(guest);
    // updateMaxBed(bed);
    // updateMaxBath(bath);
    updateAddress(address);
    navigation.navigate("HostingStep2");
  };

  return (
    <KeyboardAvoidingView
      style={styles.view}
      behavior={Platform.OS === "ios" || "android" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" || "android" ? 100 : -300}
    >
      <ScrollView style={styles.scroll}>
        <Text
          variant="headlineMedium"
          style={{ marginBottom: 10, marginTop: 20 }}
        >
          Which of these best describes your place?
        </Text>

        <SegmentedButtons
          value={propertyType}
          onValueChange={setPropertyType}
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

        <Text
          variant="headlineMedium"
          style={{ marginBottom: 10, marginTop: 20 }}
        >
          Where is your place?
        </Text>
        <TextInput
          label="Country"
          placeholder="Enter your country"
          value={address?.country}
          onChangeText={(text) => setAddress({ ...address, country: text })}
        />
        <TextInput
          label="Street Name"
          placeholder="Enter your street name"
          value={address?.street}
          onChangeText={(text) => setAddress({ ...address, street: text })}
        />
        <TextInput
          label="Postal Code"
          placeholder="Enter your postal code"
          value={address?.postalCode}
          onChangeText={(text) => setAddress({ ...address, postalCode: text })}
        />
        <TextInput
          label="Unit Number"
          placeholder="Not required for landed properties"
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
          placeholder="Usually for condo properties"
          value={address?.aptName}
          onChangeText={(text) => setAddress({ ...address, aptName: text })}
        />

        {/* <Text variant="headlineMedium">How many people can stay here?</Text>
        <View style={styles.counter}>
          <Text> Maximum occupancy</Text>
          <Counter
            result={guest}
            onMinus={(value) => setGuest(value)}
            onPlus={(value) => setGuest(value)}
          />
        </View>

        <View style={styles.counter}>
          <Text> No. of bedrooms</Text>
          <Counter
            result={bed}
            onMinus={(value) => setBed(value)}
            onPlus={(value) => setBed(value)}
          />
        </View>

        <View style={styles.counter}>
          <Text> No. of bathrooms</Text>
          <Counter
            result={bath}
            onMinus={(value) => setBath(value)}
            onPlus={(value) => setBath(value)}
          />
        </View> */}
      </ScrollView>

      <View style={styles.next}>
        <PaperButton
          mode="contained"
          onPress={() => onNavigate()}
          disabled={!propertyType} // Disable button if no property type is selected
        >
          Next
        </PaperButton>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
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
    marginTop: 20,
  },
});
