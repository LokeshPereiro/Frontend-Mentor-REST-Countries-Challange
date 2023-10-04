import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchCountriesStyles } from "./SearchCountriesStyles";
import {
  clearFilters,
  setFilteredCountries,
} from "../../redux/slices/countriesSlice/countriesSlice";

export const SearchCountries = () => {
  const { darkMode } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const onInputChange = ({ target }) => {
    setQuery(target.value);
  };
  const clearInputField = () => {
    setQuery("");
    dispatch(clearFilters());
  };
  useEffect(() => {
    if (query) dispatch(setFilteredCountries(query));
  }, [query]);

  return (
    <SearchCountriesStyles onSubmit={(evt) => evt.preventDefault()}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={onInputChange}
        className={darkMode ? "text-white" : ""}
      />
      {query !== "" && (
        <i className="fa-solid fa-xmark" onClick={clearInputField}></i>
      )}
    </SearchCountriesStyles>
  );
};
