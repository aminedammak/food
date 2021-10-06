import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  [results, errorMessage, makeSearch] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => makeSearch(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>
        Search {term}: {results.length}
      </Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
