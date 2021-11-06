import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Nav from "../../Components/Nav/Nav";
import MovieList from "../../Components/MovieList/MovieList";
import Filters from "../../Components/Filters/Filters";
import { asyncFetchFilms } from "../../Store/AsyncActions";
import { useParams, useSearchParams } from "react-router-dom";
import "./Main.scss";

export const MainContext = React.createContext();

const Main = ({
  state,
  dispatch,
  setIsMovieDetailsOpened,
  films,
  sortType,
  error,
}) => {
  const rDispatch = useDispatch();
  const [isFiltersOpen, setisFiltersOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { queryParams } = useParams();
  const genres = searchParams.get("filter");

  useEffect(() => {
    rDispatch(asyncFetchFilms({ queryParams, genres }));
  }, [queryParams, genres]);

  return (
    <MainContext.Provider
      value={{ setMovieListOpen: setIsMovieDetailsOpened, state, dispatch }}
    >
      <main className="main">
        <div className="hr"></div>
        <div className="filters__container">
          <Nav genre={genres} setSearchParams={setSearchParams} />
          <Filters
            sortType={sortType}
            isFiltersOpen={isFiltersOpen}
            setisFiltersOpen={setisFiltersOpen}
          />
        </div>
        {error ? error.message ?? error : <MovieList films={films} />}
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
