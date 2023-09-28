import { FilteringInputs } from "../../components";
import { CountryList } from "../country-list/CountryList";

export const LandingView = () => {
  return (
    <main>
      <FilteringInputs />
      <CountryList />
    </main>
  );
};
