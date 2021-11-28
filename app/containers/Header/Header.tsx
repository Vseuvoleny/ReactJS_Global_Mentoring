import React, { useRef, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../elements/Button/Button";
import Title from "../../elements/Title/Title";
import SearchIcon from "../../elements/Icon/Icons/SearchIcon/SearchIcon";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { setApplyModal } from "../../store/ActionCreator";
import { asyncFetchMovie } from "../../store/AsyncActions";
import classes from "./Header.module.scss";
import { IHeader } from "./types";

const Header: FC<IHeader> = ({ setSearchParams }) => {
  const { filmsStore } = useSelector(({ filmsStore }) => ({ filmsStore }));
  const dispatch = useDispatch();
  const ref = useRef();
  const router = useRouter();
  const { movieId } = router.query;

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
              as
              const
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
              text="+ add movie"
            />
          )}
        </div>

        {film ? <MovieDetails film={film} /> : <SearchBar ref={ref} />}
      </div>
    </header>
  );
};

export default Header;
