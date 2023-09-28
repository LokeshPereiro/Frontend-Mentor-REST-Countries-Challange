import { createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../../api/restCountriesApi";

//TODO -> Api call without createAsyncThunk
// import { setApiCountries, startLoadingCountries } from "./countriesSlice";
// export const getAllCountries = () => {
//   return async (dispatch, getState) => {
//     dispatch(startLoadingCountries());

//       const { data } = await baseURL.get("/all");
//       dispatch(setApiCountries(data));

//   };
// };

export const getAllCountries = createAsyncThunk(
  "countries/getAllCountries",
  async (thunkApi) => {
    try {
      const { data } = await baseURL.get("/all");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getSingleCountry = createAsyncThunk(
  "countries/getSingleCountry",
  async (countryCode) => {
    try {
      const { data } = await baseURL.get(`/alpha/${countryCode}`);
      return data;
    } catch (error) {
      return countryCode.rejectWithValue(error);
    }
  }
);

export const filterCountryByName = createAsyncThunk(
  "countries/filterCountryByName",
  async (name) => {
    try {
      const { data } = await baseURL.get(`/name/${name}`);
      return data;
    } catch (error) {
      return name.rejectWithValue(error);
    }
  }
);

export const filterCountryByRegion = createAsyncThunk(
  "countries/filterCountryByRegion",
  async (region) => {
    try {
      const { data } = await baseURL.get(`/region/${region}`);
      return data;
    } catch (error) {
      return region.rejectWithValue(error);
    }
  }
);
