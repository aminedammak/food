import axios from "axios";
import { API_KEY } from "../../secrets";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: API_KEY,
  },
});
