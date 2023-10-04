import axios from "axios";

export const baseURL = axios.create({
  baseURL: "https://restcountries.com/v2",
});
