/** deprecated */
// import axios from "axios";

// const key = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY!;

// export const LocationSearch = async (query: string) => {
//   // will implement the api key in the future
//   const url =
//     "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=" +
//     query +
//     "&key=" +
//     key;

//   // const response = await axios.get(url).then((locations) => {
//   //     return locations;
//   // }).catch(() => {
//   //     console.log("Error getting google autocomplete response");
//   //     return null;
//   // })
//   // const response = {
//   //   data: {
//   //     predictions: [
//   //       {
//   //         description:
//   //           "Commonwealth Avenue West, Clementi MRT Station (EW23), Singapore",
//   //         matched_substrings: [
//   //           {
//   //             length: 8,
//   //             offset: 26,
//   //           },
//   //         ],
//   //         place_id: "ChIJ59bEne0b2jERsbyVF889jkw",
//   //         reference: "ChIJ59bEne0b2jERsbyVF889jkw",
//   //         structured_formatting: {
//   //           main_text: "Clementi MRT Station (EW23)",
//   //           main_text_matched_substrings: [
//   //             {
//   //               length: 8,
//   //               offset: 0,
//   //             },
//   //           ],
//   //           secondary_text: "Commonwealth Avenue West, Singapore",
//   //         },
//   //         terms: [
//   //           {
//   //             offset: 0,
//   //             value: "Commonwealth Avenue West",
//   //           },
//   //           {
//   //             offset: 26,
//   //             value: "Clementi MRT Station (EW23)",
//   //           },
//   //           {
//   //             offset: 55,
//   //             value: "Singapore",
//   //           },
//   //         ],
//   //         types: ["point_of_interest", "establishment"],
//   //       },
//   //       {
//   //         description: "Clementi, Singapore",
//   //         matched_substrings: [
//   //           {
//   //             length: 8,
//   //             offset: 0,
//   //           },
//   //         ],
//   //         place_id: "ChIJV4YgZpAa2jERoKTarqz3AAU",
//   //         reference: "ChIJV4YgZpAa2jERoKTarqz3AAU",
//   //         structured_formatting: {
//   //           main_text: "Clementi",
//   //           main_text_matched_substrings: [
//   //             {
//   //               length: 8,
//   //               offset: 0,
//   //             },
//   //           ],
//   //           secondary_text: "Singapore",
//   //         },
//   //         terms: [
//   //           {
//   //             offset: 0,
//   //             value: "Clementi",
//   //           },
//   //           {
//   //             offset: 10,
//   //             value: "Singapore",
//   //           },
//   //         ],
//   //         types: ["neighborhood", "political", "geocode"],
//   //       },
//   //       {
//   //         description: "Clementinum, Mariánské náměstí, Old Town, Czechia",
//   //         matched_substrings: [
//   //           {
//   //             length: 8,
//   //             offset: 0,
//   //           },
//   //         ],
//   //         place_id: "ChIJNUIyNe-UC0cRnw1-EJKuNLI",
//   //         reference: "ChIJNUIyNe-UC0cRnw1-EJKuNLI",
//   //         structured_formatting: {
//   //           main_text: "Clementinum",
//   //           main_text_matched_substrings: [
//   //             {
//   //               length: 8,
//   //               offset: 0,
//   //             },
//   //           ],
//   //           secondary_text: "Mariánské náměstí, Old Town, Czechia",
//   //         },
//   //         terms: [
//   //           {
//   //             offset: 0,
//   //             value: "Clementinum",
//   //           },
//   //           {
//   //             offset: 13,
//   //             value: "Mariánské náměstí",
//   //           },
//   //           {
//   //             offset: 32,
//   //             value: "Old Town",
//   //           },
//   //           {
//   //             offset: 42,
//   //             value: "Czechia",
//   //           },
//   //         ],
//   //         types: ["tourist_attraction", "point_of_interest", "establishment"],
//   //       },
//   //       {
//   //         description: "Clementi Loop, Clementi Camp, Singapore",
//   //         matched_substrings: [
//   //           {
//   //             length: 8,
//   //             offset: 15,
//   //           },
//   //         ],
//   //         place_id: "ChIJQ6ygmqYR2jERdCulDosViMo",
//   //         reference: "ChIJQ6ygmqYR2jERdCulDosViMo",
//   //         structured_formatting: {
//   //           main_text: "Clementi Camp",
//   //           main_text_matched_substrings: [
//   //             {
//   //               length: 8,
//   //               offset: 0,
//   //             },
//   //           ],
//   //           secondary_text: "Clementi Loop, Singapore",
//   //         },
//   //         terms: [
//   //           {
//   //             offset: 0,
//   //             value: "Clementi Loop",
//   //           },
//   //           {
//   //             offset: 15,
//   //             value: "Clementi Camp",
//   //           },
//   //           {
//   //             offset: 30,
//   //             value: "Singapore",
//   //           },
//   //         ],
//   //         types: ["point_of_interest", "establishment"],
//   //       },
//   //       {
//   //         description: "Clementina, State of São Paulo, Brazil",
//   //         matched_substrings: [
//   //           {
//   //             length: 8,
//   //             offset: 0,
//   //           },
//   //         ],
//   //         place_id: "ChIJN3tVdF52lpQR0nSsZuQHkgk",
//   //         reference: "ChIJN3tVdF52lpQR0nSsZuQHkgk",
//   //         structured_formatting: {
//   //           main_text: "Clementina",
//   //           main_text_matched_substrings: [
//   //             {
//   //               length: 8,
//   //               offset: 0,
//   //             },
//   //           ],
//   //           secondary_text: "State of São Paulo, Brazil",
//   //         },
//   //         terms: [
//   //           {
//   //             offset: 0,
//   //             value: "Clementina",
//   //           },
//   //           {
//   //             offset: 12,
//   //             value: "State of São Paulo",
//   //           },
//   //           {
//   //             offset: 32,
//   //             value: "Brazil",
//   //           },
//   //         ],
//   //         types: ["locality", "political", "geocode"],
//   //       },
//   //     ],
//   //     status: "OK",
//   //   },
//   // };

//   return response.data.predictions;
// };

// export const getLatitudeLongitude = async (placeId: string) => {
//   const geo = {
//     lat: null,
//     long: null,
//   };
//   const url =
//     "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +
//     placeId +
//     "&key=" +
//     key;

//   const response = await axios
//     .get(url)
//     .then((locations) => {
//       return locations;
//     })
//     .catch(() => {
//       console.log("Error getting google autocomplete response");
//       return null;
//     });

//   if (response) {
//     geo.lat = response.result.geometry.location.lat;
//     geo.long = response.result.geometry.location.long;
//   }

//   return response ? geo : null;
// };
