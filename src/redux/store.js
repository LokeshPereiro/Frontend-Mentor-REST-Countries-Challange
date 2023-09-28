import { configureStore } from "@reduxjs/toolkit";
import { countriesSlice } from "./slices/countriesSlice/countriesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
  },
});
