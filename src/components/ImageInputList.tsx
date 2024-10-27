import { View, ScrollView } from "react-native";

import ImageInput from "../components/ImageInput";

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {imageUris.map((uri) => (
          <View key={uri} style={{ margin: 5 }}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput
          onChangeImage={(uri) => onAddImage(uri)}
          imageUri={undefined}
        />
      </View>
    </ScrollView>
  );
}
