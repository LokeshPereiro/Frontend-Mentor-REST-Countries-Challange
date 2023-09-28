import { useDispatch } from "react-redux";
import { setFilteredCountries } from "../../redux/slices/countriesSlice/countriesSlice";
import { FilterCountriesStyles } from "./FiltereCountriesStyles";

export const FilteredCountries = () => {
  const dispatch = useDispatch();

  const onFilteringCountries = (evt) => {
    dispatch(setFilteredCountries(evt.target.value));
  };

  return (
    <FilterCountriesStyles>
      <i className="fa-solid fa-filter"></i>
      <select name="label" onChange={onFilteringCountries}>
        <option>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </FilterCountriesStyles>
  );
};
