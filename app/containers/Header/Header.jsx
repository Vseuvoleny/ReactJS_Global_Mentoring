import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../elements/Button/Button";
import Title from "../../elements/Title/Title";
import SearchIcon from "../../elements/Icon/Icons/SearchIcon/SearchIcon";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { setApplyModal } from "../../store/ActionCreator";
import { asyncFetchMovie } from "../../store/AsyncActions";
import classes from "./Header.module.scss";

const Header = ({
  isMovieDetailsOpened,
  setIsMovieDetailsOpened,
  movieId,
  setSearchParams,
}) => {
  const { filmsStore } = useSelector(({ filmsStore }) => ({ filmsStore }));
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    dispatch(asyncFetchMovie(movieId));
  }, [movieId, dispatch]);

  const { film } = filmsStore;

  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <div className={classes.header__title}>
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
              type="button"
              clickHandler={() => {
                dispatch(setApplyModal());
              }}
              className={classes.add_movie}
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
  isMovieDetailsOpened: PropTypes.bool,
};

export default Header;
