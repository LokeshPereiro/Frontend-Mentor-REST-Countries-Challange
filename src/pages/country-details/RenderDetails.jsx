import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleCountry } from "../../redux/slices/countriesSlice/thunk";
import { useDispatch, useSelector } from "react-redux";
import { CountryDetailsStyles } from "./CountryDetailsStyles";
import { SingleSkeleton } from "../../ui";
import { CountryDetails } from "./CountryDetails";

export const RenderDetails = () => {
  const { currentStatus } = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  const { countryCode } = useParams();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getSingleCountry(countryCode));
  }, [countryCode]);

  return (
    <CountryDetailsStyles>
      <div className="container details__container">
        <button className="btn" onClick={goBack}>
          <i className="fa-solid fa-arrow-left"> Back</i>
        </button>
        {currentStatus === "loading" ? <SingleSkeleton /> : <CountryDetails />}
      </div>
    </CountryDetailsStyles>
  );
};
