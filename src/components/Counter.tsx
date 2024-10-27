import { StyleSheet, View, Text } from "react-native";
import { IconButton } from "react-native-paper";

export default function Counter({ result, onMinus, onPlus }) {
  return (
    <View style={styles.container}>
      <IconButton
        icon="minus-circle-outline"
        testID="minus-button"
        size={30}
        onPress={() => {
          if (result > 0) {
            onMinus(result - 1);
          }
        }}
      />

      <Text style={{ textAlign: "center" }}>{result}</Text>

      <IconButton
        icon="plus-circle-outline"
        testID="plus-button"
        size={30}
        onPress={() => {
          if (result < 10) {
            onPlus(result + 1);
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
