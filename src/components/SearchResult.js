import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SearchResult = ({ title, results }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{results.length}</Text>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({});
