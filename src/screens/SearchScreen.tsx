import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import {
  Appbar,
  Card,
  Divider,
  List,
  Searchbar,
  Text,
  Checkbox,
  TextInput,
  Button,
} from "react-native-paper";
import { DatePickerInput } from "react-native-paper-dates";

import { getGeocodeByPlaceId } from "../api/GoogleMapsAPI";
import { LocationSearch } from "../api/LocationSearchAPI";
import { PropertyEnum } from "../graphql/API";

const SearchScreen = (props: any) => {
  const navigation = useNavigation();

  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  // const [checkedCondo, setCheckedCondo] = useState(true);
  // const [checkedLanded, setCheckedLanded] = useState(true);
  // const [checkedHDB, setCheckedHDB] = useState(true);
  const [accommodationTypes, setAccommodationTypes] = useState({
    CONDO: true,
    LANDED: true,
    HDB: true,
  });
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [moveInDate, setMoveInDate] = useState(undefined);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const handleSetAccommodationTypes = (type) => {
    setAccommodationTypes({
      ...accommodationTypes,
      [type]: !accommodationTypes[type],
    });
  };

  const handleMinPrice = (text) => {
    const number = text.replace(/[^0-9]/g, "");
    setMinPrice(number);
  };

  const handleMaxPrice = (text) => {
    const number = text.replace(/[^0-9]/g, "");
    setMaxPrice(number);
  };

  const handleMoveInDate = (date) => {
    console.log("date");
    console.log(date);
    console.log(formatDate(date));
    setMoveInDate(date);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-indexed
    const year = date.getFullYear();

    // Ensure leading zeros for single-digit day and month
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${year}-${formattedMonth}-${formattedDay}`;
  };

  const getPrefferedLocations = async (search: string) => {
    const locations = await LocationSearch(search);
    setSearchResult(locations);
    console.log(locations);

    return locations;
  };

  const pickedLocation = (location) => {
    setQuery(location);
    setSearch(location);
    setSearchResult([]);
  };

  const setGeo = async (placeId) => {
    const geo = await getGeocodeByPlaceId(placeId);
    setLatitude(geo.lat);
    setLongitude(geo.lng);
    console.log(geo);
  };

  const prefferLocation = () => {
    const results = searchResult;
    // style={{width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}
    // <List.Icon {...props} icon="crosshairs-gps" style={{justifyContent: 'center', alignItems: 'center'}}/>
    //<Feather {...props} name="map-pin" style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 'auto'}} size={20} />

    if (results.length > 0) {
      return (
        <ScrollView
          contentContainerStyle={{ width: "100%", justifyContent: "center" }}
        >
          {results.map((result) => (
            <>
              <List.Item
                key={result.place_id}
                style={{
                  marginHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                title={result.structured_formatting.main_text}
                description={result.description}
                centered
                left={() => {
                  return (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 1,
                        borderRadius: 10,
                        width: 40,
                        height: 40,
                        backgroundColor: "#f2f2f2",
                      }}
                    >
                      <Feather name="map-pin" size={20} />
                    </View>
                  );
                }}
                onPress={() => {
                  pickedLocation(result.structured_formatting.main_text);
                  setGeo(result.place_id);
                }}
              />
              <Divider style={{ width: "100%" }} />
            </>
          ))}
        </ScrollView>
      );
    } else {
      return <></>;
    }
  };

  const navigateAndSearchAccomm = () => {
    // Prepare an object with selected property types
    const selectedPropertyTypes = Object.keys(accommodationTypes).reduce(
      (result, type) => {
        if (accommodationTypes[type]) {
          result[type.toUpperCase()] = PropertyEnum[type.toUpperCase()];
        }
        return result;
      },
      {},
    );
    // Prepare the search criteria as an object
    const searchCriteria = {
      ...selectedPropertyTypes,
      minLat: latitude - 0.03,
      maxLat: latitude + 0.03,
      minLong: longitude - 0.03,
      maxLong: longitude + 0.03,
      query,
    };

    // Add available date criteria if available
    if (moveInDate) {
      searchCriteria.availableDate = formatDate(moveInDate);
    }

    // Add price range criteria if available
    if (minPrice && maxPrice) {
      searchCriteria.minPrice = parseFloat(minPrice);
      searchCriteria.maxPrice = parseFloat(maxPrice);
    }
    navigation.navigate("Search Result", { searchCriteria }); // pass in search criteria as props
  };

  const searchLocation = () => {
    if (search !== "") {
      return (
        <>
          <View style={{ alignItems: "center", marginVertical: "5%" }}>
            <Card style={{ width: "90%", height: 475 }}>
              <ScrollView
                contentContainerStyle={{
                  width: "100%",
                  justifyContent: "center",
                }}
                automaticallyAdjustKeyboardInsets
              >
                <View>
                  <Card.Title
                    title="Property Type"
                    titleVariant="titleMedium"
                  />
                  <Card.Content style={{ justifyContent: "flex-start" }}>
                    <Checkbox.Item
                      label="Condo"
                      status={
                        accommodationTypes.CONDO ? "checked" : "unchecked"
                      }
                      labelVariant="labelMedium"
                      onPress={() => handleSetAccommodationTypes("CONDO")}
                    />
                    <Checkbox.Item
                      label="Landed"
                      status={
                        accommodationTypes.LANDED ? "checked" : "unchecked"
                      }
                      labelVariant="labelMedium"
                      onPress={() => handleSetAccommodationTypes("LANDED")}
                    />
                    <Checkbox.Item
                      label="HDB"
                      status={accommodationTypes.HDB ? "checked" : "unchecked"}
                      labelVariant="labelMedium"
                      onPress={() => handleSetAccommodationTypes("HDB")}
                    />
                  </Card.Content>
                  <Divider />
                </View>
                <View>
                  <Card.Title title="Price" titleVariant="titleMedium" />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: "5%",
                      marginBottom: "5%",
                    }}
                  >
                    <TextInput
                      label="Min"
                      value={minPrice}
                      keyboardType="number-pad"
                      onChangeText={(text) => handleMinPrice(text)}
                      style={{ width: 150 }}
                    />
                    <TextInput
                      label="Max"
                      value={maxPrice}
                      keyboardType="number-pad"
                      onChangeText={(text) => handleMaxPrice(text)}
                      style={{ width: 150 }}
                    />
                  </View>
                  <Divider />
                </View>
                <View>
                  <Card.Title title="Listing Date" titleVariant="titleMedium" />
                  <View
                    style={{
                      justifyContent: "center",
                      flex: 1,
                      marginHorizontal: "5%",
                    }}
                  >
                    <DatePickerInput
                      locale="en-GB"
                      label="Listing Date"
                      value={moveInDate}
                      onChange={(d) => handleMoveInDate(d)}
                      inputMode="start"
                    />
                  </View>
                </View>
              </ScrollView>
            </Card>
          </View>
          <View
            style={{ flexDirection: "row-reverse", marginHorizontal: "5%" }}
          >
            <Button mode="contained" onPress={() => navigateAndSearchAccomm()}>
              Search
            </Button>
          </View>
        </>
      );
    }
  };

  return (
    <>
      <Card
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          height: "100%",
          borderRadius: 25,
          top: "8%",
        }}
      >
        <View style={{ alignItems: "center", top: 30 }}>
          <Searchbar
            style={{ width: "90%", marginBottom: 35, alignItems: "center" }}
            placeholder="Search Location"
            onChangeText={(searchQuery) => {
              setQuery(searchQuery);
              setSearch("");
              getPrefferedLocations(searchQuery);
            }}
            value={query}
            icon={() => {
              if (search === "") {
                return <Feather name="arrow-left" size={20} />;
              } else {
                return <Feather name="search" size={20} />;
              }
            }}
            onIconPress={() => navigation.goBack()}
          />
        </View>
        {searchLocation()}
        {prefferLocation()}
      </Card>
    </>
  );
};

export default SearchScreen;
