import { Alert } from "react-native";

import { isWeb } from "../utils";

/** Web compatible Alert component */
const alertPolyfill = (title, description, options, extra) => {
  const result = window.confirm(
    [title, description].filter(Boolean).join("\n"),
  );

  if (result) {
    const confirmOption = options.find(({ style }) => style !== "cancel");
    confirmOption && confirmOption.onPress();
  } else {
    const cancelOption = options.find(({ style }) => style === "cancel");
    cancelOption && cancelOption.onPress();
  }
};

const alert = isWeb ? alertPolyfill : Alert.alert;

export default alert;
