import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchFilms } from "../../Store/ActionsCreator";
import Nav from "../../Components/Nav/Nav";
import MovieList from "../../Components/MovieList/MovieList";
import Filters from "../../Components/Filters/Filters";
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
  const [isFiltersOpen, setisFiltersOpen] = useState(false);

  useEffect(() => {
    fetchFilms(sortType);
  }, [sortType]);

  return (
    <MainContext.Provider
      value={{ setMovieListOpen: setIsMovieDetailsOpened, state, dispatch }}
    >
      <main className="main">
        <div className="hr"></div>
        <div className="filters__container">
          <Nav />
          <Filters
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

const mapStateToProps = ({ films, sortType, error }) => {
  return { films, sortType, error };
};

export default connect(mapStateToProps, fetchFilms)(Main);
