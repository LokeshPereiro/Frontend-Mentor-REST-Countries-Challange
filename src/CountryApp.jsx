//React Router
import { Routes, Route } from "react-router-dom";
import { LandingView, CountryDetails, ErrorPage } from "./pages";
import { GlobalStyles, LayoutWrapper, light, dark } from "./ui";

import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

export const CountryApp = () => {
  const { darkMode } = useSelector((state) => state.countries);
  return (
    <>
      <ThemeProvider theme={darkMode ? dark : light}>
        <GlobalStyles />
        <Routes>
          {/* Nested Routes with Outlet */}
          <Route path="/" element={<LayoutWrapper />}>
            <Route index element={<LandingView />} />
            <Route path="countries/:countryCode" element={<CountryDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
