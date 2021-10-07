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
      {isMovieDetailsOpened ? undefined : (
        <div className="header__background"></div>
      )}
      <div className="header__container">
        <div className="header__title">
          <Title />
          {isMovieDetailsOpened ? (
            <SearchIcon width="29" height="30" viewBox="0 0 29 30" />
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

        {isMovieDetailsOpened ? <MovieDetails /> : <SearchBar />}
      </div>
    </header>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func,
  isMovieDetailsOpened: PropTypes.bool,
};

export default Header;
