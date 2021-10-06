import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import SearchResult from "../components/SearchResult";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, errorMessage, makeSearch] = useResults();

  const filterByPrice = (price) => {
    return results.filter((item) => item.price === price);
  };

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
      <SearchResult title="Cost effective" results={filterByPrice("$")} />
      <SearchResult title="Bit pricier" results={filterByPrice("$$")} />
      <SearchResult title="Big spender" results={filterByPrice("$$$")} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
