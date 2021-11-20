import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Nav from "../../components/Nav/Nav";
import MovieList from "../../components/MovieList/MovieList";
import Filters from "../../components/Filters/Filters";
import { asyncFetchFilms } from "../../store/AsyncActions";
import classes from "./Main.module.scss";

export const MainContext = React.createContext();

const Main = ({
  state,
  dispatch,
  setIsMovieDetailsOpened,
  films,
  error,
  setSearchParams,
}) => {
  const rDispatch = useDispatch();
  const [isFiltersOpen, setisFiltersOpen] = useState(false);

  // useEffect(() => {
  //   rDispatch(asyncFetchFilms());
  // }, []);

  return (
    <MainContext.Provider
      value={{ setMovieListOpen: setIsMovieDetailsOpened, state, dispatch }}
    >
      <main className={classes.main}>
        <div className={classes.hr}></div>
        <div className={classes.filters__container}>
          <Nav setSearchParams={setSearchParams} />
          <Filters
            setSearchParams={setSearchParams}
            isFiltersOpen={isFiltersOpen}
            setisFiltersOpen={setisFiltersOpen}
          />
        </div>
        {error ? (
          error.message ?? error
        ) : (
          <MovieList films={films} setSearchParams={setSearchParams} />
        )}
      </main>
    </MainContext.Provider>
  );
};

Main.propTypes = {
  state: PropTypes.string,
  dispatch: PropTypes.func,
  setIsMovieDetailsOpened: PropTypes.func,
};

const mapStateToProps = ({ filmsStore }) => {
  return {
    films: filmsStore.films,
    sortType: filmsStore.sortType,
    error: filmsStore.error,
  };
};

export default connect(mapStateToProps, null)(Main);
