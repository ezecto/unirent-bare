import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      children=""
      style={[styles.button, mode === "outlined", style]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});
