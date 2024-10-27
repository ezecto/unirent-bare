import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const MaskOverlay = () => {
  return <View style={styles.overlay}></View>;
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: "rgb(0, 0, 0)", // Black with opacity
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // Ensure it's on top
  },
});

export default MaskOverlay;
