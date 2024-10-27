/** deprecated */
// import axios from "axios";

// // TODO: to implement api key storage in github, currently used in .env.local
// const key = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;

// export async function getGeocode(address) {
//   console.log("getGeocode start..");
//   const input = address.country + "%20" + address.postalCode;
//   const url =
//     "https://maps.googleapis.com/maps/api/geocode/json?address=" +
//     input +
//     "&key=" +
//     key;

//   try {
//     // const response = await axios.get(url);
//     console.log(response.data);
//     return response.data.results[0].geometry.location;
//   } catch (error) {
//     console.error("Error in google maps geocode: " + error);
//   }
// }

// /** example response */
// const response = {
//   data: {
//     results: [
//       {
//         address_components: [
//           {
//             long_name: "650190",
//             short_name: "650190",
//             types: ["postal_code"],
//           },
//           {
//             long_name: "Bukit Batok",
//             short_name: "Bukit Batok",
//             types: ["neighborhood", "political"],
//           },
//           {
//             long_name: "Singapore",
//             short_name: "Singapore",
//             types: ["locality", "political"],
//           },
//           {
//             long_name: "Singapore",
//             short_name: "SG",
//             types: ["country", "political"],
//           },
//         ],
//         formatted_address: "Singapore 650190",
//         geometry: {
//           location: {
//             lat: 1.345379,
//             lng: 103.7458599,
//           },
//           location_type: "APPROXIMATE",
//           viewport: {
//             northeast: {
//               lat: 1.346727980291502,
//               lng: 103.7472088802915,
//             },
//             southwest: {
//               lat: 1.344030019708498,
//               lng: 103.7445109197085,
//             },
//           },
//         },
//         place_id: "ChIJUfKPBhYQ2jERMbCvEhzrbxA",
//         types: ["postal_code"],
//       },
//     ],
//     status: "OK",
//   },
// };
