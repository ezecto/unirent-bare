// import { Auth } from "aws-amplify";
// import { View, StyleSheet } from "react-native";
// import { Text, Button } from "react-native-paper";

// export default function LandingScreen() {
//   const redirectToHostedUI = async () => {
//     try {
//       await Auth.federatedSignIn();
//     } catch (error) {
//       console.error("Error redirecting to hosted UI: ", error);
//     }
//   };

//   return (
//     <View style={styles.view}>
//       <View style={styles.centeredContent}>
//         <Text variant="displayMedium" style={styles.titleText}>
//           Welcome to UniRent App!
//         </Text>
//         <Text variant="bodyLarge" style={styles.subText}>
//           Find your next rental property easily!
//         </Text>

//         <Button
//           mode="contained"
//           style={styles.button}
//           onPress={redirectToHostedUI}
//         >
//           Login
//         </Button>
//       </View>
//     </View>
//   );
// }

// export const styles = StyleSheet.create({
//   view: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 20,
//     backgroundColor: "#f4f4f4",
//   },
//   centeredContent: {
//     alignItems: "center",
//     marginHorizontal: 20,
//   },
//   titleText: {
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#333",
//     marginBottom: 10,
//   },
//   subText: {
//     color: "#666",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   button: {
//     width: "80%",
//     marginTop: 20,
//   },
// });
