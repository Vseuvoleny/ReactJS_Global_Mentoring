import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Nav from "../../Components/Nav/Nav";
import MovieList from "../../Components/MovieList/MovieList";
import Filters from "../../Components/Filters/Filters";
import { asyncFetchFilms } from "../../Store/AsyncActions";
import { useParams } from "react-router-dom";
import classes from "./Main.module.scss";

export const MainContext = React.createContext();

const Main = ({
  state,
  dispatch,
  setIsMovieDetailsOpened,
  films,
  error,
  searchParams,
  setSearchParams,
}) => {
  const rDispatch = useDispatch();
  const [isFiltersOpen, setisFiltersOpen] = useState(false);
  const { queryParams } = useParams();
  const genres = searchParams.get("filter");
  const sortBy = searchParams.get("sortBy");

  useEffect(() => {
    rDispatch(asyncFetchFilms({ queryParams, genres, sortBy }));
  }, [queryParams, genres, sortBy]);

  return (
    <MainContext.Provider
      value={{ setMovieListOpen: setIsMovieDetailsOpened, state, dispatch }}
    >
      <main className={classes.main}>
        <div className={classes.hr}></div>
        <div className={classes.filters__container}>
          <Nav genre={genres} setSearchParams={setSearchParams} />
          <Filters
            setSearchParams={setSearchParams}
            sortBy={sortBy}
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
