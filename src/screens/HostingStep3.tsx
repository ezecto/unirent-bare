import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Card,
  Checkbox,
  Button as PaperButton,
  Text,
  TextInput,
} from "react-native-paper";

import IUnitFeature from "../model/IUnitFeature";
import { useHostStore } from "../store/host";
import {
  convertUnitFeatureToArray,
  getFeatureLabel,
  initialFeatureState,
} from "../utils/UnitFeatureUtil";

export default function HostingStep3({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(undefined);
  const [unitFeature, setUnitFeature] =
    useState<IUnitFeature>(initialFeatureState);

  const handlePriceChange = (text) => {
    const number = text.replace(/[^0-9]/g, "");
    setPrice(number);
  };

  // initialize zustand store methods
  const updateTitle = useHostStore((state) => state.updateTitle);
  const updateDescription = useHostStore((state) => state.updateDescription);
  const updatePrice = useHostStore((state) => state.updatePrice);
  const updateUnitFeature = useHostStore((state) => state.updateUnitFeature);

  const onNavigate = () => {
    // update zustand store
    updateTitle(title);
    updateDescription(description);
    updatePrice(price);
    updateUnitFeature(convertUnitFeatureToArray(unitFeature));
    navigation.navigate("HostingStep4");
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

  return (
    <View style={styles.view}>
      <ScrollView style={styles.scroll}>
        <Text
          variant="headlineMedium"
          style={{ marginBottom: 10, marginTop: 20 }}
        >
          Add a title for your place
        </Text>
        <TextInput
          label="Title"
          placeholder="Enter Title"
          onChangeText={(text) => setTitle(text)}
          value={title}
        />

        <Text
          variant="headlineMedium"
          style={{ marginBottom: 10, marginTop: 20 }}
        >
          Add a description
        </Text>
        <TextInput
          label="Description"
          placeholder="Enter Description"
          multiline
          numberOfLines={5}
          maxLength={100}
          onChangeText={(text) => setDescription(text)}
          value={description}
        />

        <Text
          variant="headlineMedium"
          style={{ marginBottom: 10, marginTop: 20 }}
        >
          Set price
        </Text>
        <TextInput
          label="Price"
          placeholder="Enter Price"
          left={<TextInput.Affix text="S$  " />}
          keyboardType="number-pad"
          onChangeText={(text) => handlePriceChange(text)}
          value={price}
        />

        <Text
          variant="headlineMedium"
          style={{ marginBottom: 10, marginTop: 20 }}
        >
          Unit Feature
        </Text>
        <Text variant="labelLarge">
          Select the unit features provided by your accommodation
        </Text>
        <Card>
          <CheckboxGroup
            unitFeature={unitFeature}
            setUnitFeature={setUnitFeature}
          />
        </Card>
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
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
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
  next: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
  },
});
