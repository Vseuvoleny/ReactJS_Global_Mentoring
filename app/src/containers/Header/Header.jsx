import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Button from "../../Elements/Button/Button";
import Title from "../../Elements/Title/Title";
import SearchIcon from "../../Elements/Icon/Icons/SearchIcon/SearchIcon";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import { APPLY_MODAL } from "../../Store/ActionTypes";
import "./Header.scss";

const Header = ({
  dispatch,
  isMovieDetailsOpened,
  setIsMovieDetailsOpened,
}) => {
  const ref = useRef();

  useEffect(() => {
    if (isMovieDetailsOpened === null) {
      ref.current.focus();
    }
  }, [isMovieDetailsOpened]);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__title">
          <Title />
          {isMovieDetailsOpened ? (
            <SearchIcon
              width="29"
              height="30"
              viewBox="0 0 29 30"
              onClick={() => {
                setIsMovieDetailsOpened(null);
              }}
            />
          ) : (
            <Button
              type={"button"}
              clickHandler={() => {
                dispatch({ type: APPLY_MODAL });
              }}
              className={"add-movie"}
              text={"+ add movie"}
            />
          )}
        </div>

        {isMovieDetailsOpened ? <MovieDetails /> : <SearchBar ref={ref} />}
      </div>
    </header>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func,
  isMovieDetailsOpened: PropTypes.bool,
};

export default Header;
