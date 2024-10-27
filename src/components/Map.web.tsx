import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

/** Web componnent of Map because react-native-maps cannot work for web */
export default function Map({ latitude, longitude }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={styles.map}
        zoom={14}
        center={{ lat: latitude, lng: longitude }}
      >
        <MarkerF position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    )
  );
}

const styles = StyleSheet.create({
  map: { height: width / 2, marginVertical: 10 },
});
