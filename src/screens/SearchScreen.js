import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
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
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => makeSearch(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <SearchResult title="Cost effective" results={filterByPrice("$")} />
        <SearchResult title="Bit pricier" results={filterByPrice("$$")} />
        <SearchResult title="Big spender" results={filterByPrice("$$$")} />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
