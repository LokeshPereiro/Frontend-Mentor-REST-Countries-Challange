import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/slices/countriesSlice/thunk";
import { CountryListStyles } from "./CountryListStyles";
import { SingleCountry } from "../";
import { Skeleton } from "../../ui";

export const CountryList = () => {
  const { isFiltered, currentStatus, countries } = useSelector(
    (state) => state.countries
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  if (currentStatus === "loading") {
    const load = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10, 11, 12];

    return (
      <CountryListStyles>
        <div className="container countries__container">
          {load.map((x, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      </CountryListStyles>
    );
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
