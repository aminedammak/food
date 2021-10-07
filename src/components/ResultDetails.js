import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.text}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultDetails;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
  },
  container: {
    marginLeft: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
