import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SearchCountriesStyles } from "./SearchCountriesStyles";
import { setFilteredCountries } from "../../redux/slices/countriesSlice/countriesSlice";

export const SearchCountries = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const onInputChange = ({ target }) => {
    setQuery(target.value);
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
      />
    </SearchCountriesStyles>
  );
};
