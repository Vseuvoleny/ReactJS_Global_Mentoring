import React from "react";
import PropTypes from "prop-types";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Button from "../../Elements/Button/Button";
import Title from "../../Elements/Title/Title";
import SearchIcon from "../../Elements/Icon/Icons/SearchIcon/SearchIcon";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import "./Header.scss";
const Header = ({ dispatch, isMovieDetailsOpened }) => {
  return (
    <header className="header">
      <div className="header__background"></div>
      <div className="header__container">
        <div className="header__title">
          <Title />
          {isMovieDetailsOpened ? (
            <SearchIcon />
          ) : (
            <Button
              type={"button"}
              clickHandler={() => {
                dispatch({ type: "apply" });
              }}
              className={"add-movie"}
              text={"+ add movie"}
            />
          )}
        </div>

        {isMovieDetailsOpened ? <SearchBar /> : <MovieDetails />}
      </div>
    </header>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func,
  isMovieDetailsOpened: PropTypes.bool,
};

export default Header;
