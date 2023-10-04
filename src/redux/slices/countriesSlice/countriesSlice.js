import { createSlice } from "@reduxjs/toolkit";
import { getAllCountries, getSingleCountry } from "./thunk";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    currentStatus: "all-good",
    countries: [],
    country: {},
    errorMsg: null,
    darkMode: false,
    isFiltered: null,
  },
  reducers: {
    setFilteredCountries: (state, { payload }) => {
      //For both rendering purpose -> search and filter funcionalities
      state.isFiltered = state.countries.filter((country) => {
        const regex = new RegExp(`${payload}`, "gi");
        const countryName = country.name.match(regex);
        const diffRegion = country.region.match(regex);
        return countryName || diffRegion;
      });
    },
    setDarkLightMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    clearFilters: (state) => {
      state.isFiltered = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCountries.pending, (state) => {
      state.currentStatus = "loading";
    });
    builder.addCase(getAllCountries.fulfilled, (state, { payload }) => {
      state.currentStatus = "succeeded";
      state.countries = payload;
      state.country = {};
    });
    builder.addCase(getAllCountries.rejected, (state, { payload }) => {
      state.currentStatus = "failed";
      state.errorMsg = payload;
    });
    builder.addCase(getSingleCountry.pending, (state) => {
      state.currentStatus = "loading";
    });
    builder.addCase(getSingleCountry.fulfilled, (state, { payload }) => {
      state.currentStatus = "succeeded";
      state.country = payload;
      state.countries = [];
    });
    builder.addCase(getSingleCountry.rejected, (state, { payload }) => {
      state.currentStatus = "failed";
      state.errorMsg = payload;
    });
  },
});

export const { setFilteredCountries, setDarkLightMode, clearFilters } =
  countriesSlice.actions;
