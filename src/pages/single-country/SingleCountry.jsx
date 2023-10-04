import { SingleCountryStyles } from "./SingleCountryStyles";

export const SingleCountry = ({ country }) => {
  // console.log(country);
  const { name, flags, region, population, capital, alpha3Code } = country;

  return (
    <SingleCountryStyles to={`/countries/${alpha3Code}`}>
      <article className="country">
        <div className="country__img">
          <img src={flags.svg} alt="country image" />
        </div>
        <div className="country__data">
          <h2 className="country__name">{name}</h2>
          <div className="country__data_row">
            <span className="country__data_name">Population:</span>
            <span className="country__data_item"> {population}</span>
          </div>
          <div className="country__data_row">
            <span className="country__data_name">Region:</span>{" "}
            <span className="country__data_item">{region}</span>
          </div>
          <div className="country__data_row">
            <span className="country__data_name">Capital:</span>{" "}
            <span className="country__data_item">{capital}</span>
          </div>
        </div>
      </article>
    </SingleCountryStyles>
  );
};
