import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button as PaperButton, Text } from "react-native-paper";

import ImageInputList from "../components/ImageInputList";
import { useHostStore } from "../store/host";

export default function HostingStep2({ navigation }) {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  // initialize zustand store methods
  const updateImages = useHostStore((state) => state.updateImages);

  const onNavigate = () => {
    // update zustand store
    updateImages(imageUris);
    navigation.navigate("HostingStep3");
  };

  return (
    <View style={styles.view}>
      <ScrollView style={styles.scroll}>
        <Text
          variant="headlineMedium"
          style={{ marginBottom: 10, marginTop: 20 }}
        >
          Make your listing stand out with great photos
        </Text>

        <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
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
});
