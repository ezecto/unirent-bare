import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Searchbar, List } from "react-native-paper";

import { LocationSearch } from "../api/LocationSearchAPI";

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const showPrefferItem = async (search: string) => {
    const locations = await LocationSearch(search);
    setSearchResult(locations);
    console.log(locations);

    return locations;
  };

  const prefferLocation = () => {
    const results = searchResult.slice(0, 5); // Show only 5 items by default

    if (results.length > 0) {
      return (
        <>
          {results.map((result) => (
            <List.Item
              key={result.place_id} // Add a unique key for each item (e.g., 'id')
              style={{ marginHorizontal: 30 }}
              title={result.structured_formatting.main_text}
              description={result.description}
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="crosshairs-gps"
                  style={{ justifyContent: "center", alignItems: "center" }}
                />
              )}
              onPress={() => {
                console.log("This should navigate to search result screen");
              }}
            />
          ))}
        </>
      );
    } else {
      return <></>;
    }

    // return (
    //   <>
    //     <List.Item
    //       style={{marginHorizontal: 30}}
    //       title="First Item"
    //       description="Item description"
    //       left={props => <List.Icon {...props} icon="folder" />}
    //     />
    //     <List.Item
    //       style={{marginHorizontal: 30}}
    //       title="First Item"
    //       description="Item description"
    //       left={props => <List.Icon {...props} icon="folder" />}
    //     />
    //   </>
    // );
  };

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Searchbar
        placeholder="Search Location"
        onChangeText={(query) => {
          setSearch(query);
          showPrefferItem(query);
        }}
        value={search}
        style={{ top: 40, width: "80%", marginBottom: 50 }}
        onPressIn={() => {
          console.log("Search now");
        }}
      />
      {prefferLocation()}
    </View>
  );
}
