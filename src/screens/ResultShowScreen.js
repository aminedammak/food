import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../apis/yelp";

const ResultShowScreen = ({ route }) => {
  const { id } = route.params;
  const [result, setResult] = useState(null);

  const getResult = async () => {
    const result = await yelp.get(`/${id}`);
    setResult(result.data);
  };

  useEffect(() => {
    getResult();
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150,
  },
});
