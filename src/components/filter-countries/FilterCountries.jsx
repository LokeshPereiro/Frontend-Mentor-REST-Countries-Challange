import { useDispatch } from "react-redux";
import { setFilteredCountries } from "../../redux/slices/countriesSlice/countriesSlice";
import { FilterCountriesStyles } from "./FilterCountriesStyles";

export const FilteredCountries = () => {
  const dispatch = useDispatch();

  const onFilteringCountries = (evt) => {
    dispatch(setFilteredCountries(evt.target.value));
  };

  return (
    <FilterCountriesStyles>
      <select name="label" onChange={onFilteringCountries}>
        <option> Filter Regions</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <i className="fa-solid fa-filter icon"></i>
    </FilterCountriesStyles>
  );
};
