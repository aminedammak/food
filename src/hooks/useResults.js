import React, { useState, useEffect } from "react";
import yelp from "../apis/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const makeSearch = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          limit: 50,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    makeSearch("pasta");
  }, []);

  return [results, errorMessage, makeSearch];
};
