import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../apis/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const makeSearch = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term,
          limit: 44,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={makeSearch} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>
        Search {term}: {results.length}
      </Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
