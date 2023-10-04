import { CountryList } from "../country-list/CountryList";
import { FilteringInputs } from "../../components";

export const LandingView = () => {
  return (
    <main>
      <FilteringInputs />
      <CountryList />
    </main>
  );
};
