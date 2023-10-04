import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CountryDetailsStyles } from "./CountryDetailsStyles";

export const CountryDetails = () => {
  const { country } = useSelector((state) => state.countries);

  const {
    name,
    flags,
    nativeName,
    population,
    region,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <CountryDetailsStyles>
      <div className="selectCountry__container">
        <div className="image">
          <img src={flags?.svg} alt="flag" />
        </div>

        <div className="details">
          <h2 className="data__name">{name}</h2>
          <div className="data">
            <div className="data__left">
              <div className="data__row">
                <span className="data__name">Native Name:</span>
                <span className="data__item"> {nativeName}</span>
              </div>
              <div className="data__row">
                <span className="data__name">Population:</span>
                <span className="data__item"> {population}</span>
              </div>
              <div className="data__row">
                <span className="data__name">Region:</span>
                <span className="data__item"> {region}</span>
              </div>
              <div className="data__row">
                <span className="data__name">Capital:</span>
                <span className="data__item"> {capital}</span>
              </div>
            </div>
            <div className="data__right">
              <div className="data__row">
                <span className="data__name">Top Level Domain:</span>
                <span className="data__item">{topLevelDomain}</span>
              </div>
              <div className="data__row">
                <span className="data__name">Currency:</span>
                <span className="data__item">
                  {" "}
                  {currencies?.map((cur) => cur.name)}
                </span>
              </div>
              <div className="data__row">
                <span className="data__name">Language:</span>
                <span className="data__item">
                  {" "}
                  {languages?.map((lang) => lang.name)}
                </span>
              </div>
            </div>
          </div>
          <div className="borders">
            <h4 className="data__name">Border countries</h4>
            <div className="border">
              {borders?.map((bor) => (
                <Link key={bor} to={`/countries/${bor}`}>
                  <span className="border-box">{bor}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CountryDetailsStyles>
  );
};
