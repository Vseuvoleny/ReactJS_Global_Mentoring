import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Button from "../../Elements/Button/Button";
import Title from "../../Elements/Title/Title";
import SearchIcon from "../../Elements/Icon/Icons/SearchIcon/SearchIcon";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";
import { setApplyModal } from "../../Store/ActionCreator";
import { asyncFetchMovie } from "../../Store/AsyncActions";
import "./Header.scss";

const Header = ({ movieId, setSearchParams }) => {
  const { filmsStore } = useSelector(({ filmsStore }) => ({ filmsStore }));
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    dispatch(asyncFetchMovie(movieId));
  }, [movieId, dispatch]);

  const { film } = filmsStore;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__title">
          <Title />
          {movieId ? (
            <SearchIcon
              width="30"
              height="30"
              viewBox="0 0 30 30"
              onClick={() => {
                setSearchParams({ movieId: {} });
              }}
            />
          ) : (
            <Button
              type={"button"}
              clickHandler={() => {
                dispatch(setApplyModal());
              }}
              className={"add-movie"}
              text={"+ add movie"}
            />
          )}
        </div>

        {film ? (
          <MovieDetails
            img={film.poster_path}
            title={film.title}
            rating={film.vote_average}
            year={film.release_date.split("-")[0]}
            runtime={film.runtime}
            overview={film.overview}
          />
        ) : (
          <SearchBar ref={ref} />
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  movieId: PropTypes.number,
  setSearchParams: PropTypes.func,
};

export default Header;
