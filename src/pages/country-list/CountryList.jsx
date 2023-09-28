import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/slices/countriesSlice/thunk";
import { CountryListStyles } from "./CountryListStyles";
import { SingleCountry } from "../";

export const CountryList = () => {
  const { isFiltered, currentStatus, countries } = useSelector(
    (state) => state.countries
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  if (currentStatus === "loading") {
    return <h1 className="alert alert-danger">Loading...</h1>;
  }

  const currentRenderingCountries =
    isFiltered === null || isFiltered.length === 0 ? countries : isFiltered;

  return (
    <CountryListStyles>
      <div className="container countries__container">
        {currentRenderingCountries?.map((country, i) => {
          return <SingleCountry key={i} country={country} />;
        })}
      </div>
    </CountryListStyles>
  );
};
