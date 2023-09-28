import { useDispatch, useSelector } from "react-redux";
import { setDarkLightMode } from "../redux/slices/countriesSlice/countriesSlice";
import { HeaderStyles } from "./HeaderStyles";
import { Link } from "react-router-dom";

export const Header = () => {
  const { darkMode } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const handleMode = () => {
    dispatch(setDarkLightMode());
  };
  return (
    <HeaderStyles>
      <div className="container header__container">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <button className="btn header__btn" onClick={handleMode}>
          {!darkMode ? (
            <i className="fa-solid fa-moon"> Dark Mode</i>
          ) : (
            <i className="fa-solid fa-sun"> Light Mode</i>
          )}
        </button>
      </div>
    </HeaderStyles>
  );
};
