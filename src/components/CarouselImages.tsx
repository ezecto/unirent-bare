import { Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

export function CarouselImages({ images }) {
  return (
    <Image
      resizeMode="contain"
      style={{ height: "100%", width }}
      source={{ uri: images }}
    />
  );
}
