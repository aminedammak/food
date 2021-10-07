import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ResultDetails from "./ResultDetails";

const SearchResult = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetails result={item} />;
        }}
      />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 15,
  },
});
