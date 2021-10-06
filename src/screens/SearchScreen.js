import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../apis/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const makeSearch = async () => {
    const response = await yelp.get("/search", {
      params: {
        term,
        limit: 44,
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={makeSearch} />
      <Text>
        Search {term}: {results.length}
      </Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
