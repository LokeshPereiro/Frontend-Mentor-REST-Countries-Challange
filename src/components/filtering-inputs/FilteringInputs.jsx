import { SearchCountries } from "../search-countries/SearchCountries";
import { FilteredCountries } from "../filter-countries/FilterCountries";
import { FilteringInputsStyles } from "./FilteringInputsStyles";

export const FilteringInputs = () => {
  return (
    <FilteringInputsStyles>
      <div className="container forms__container">
        <SearchCountries />
        <FilteredCountries />
      </div>
    </FilteringInputsStyles>
  );
};
