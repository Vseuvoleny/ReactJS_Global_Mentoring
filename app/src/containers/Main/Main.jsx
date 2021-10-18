import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Nav from "../../Components/Nav/Nav";
import MovieList from "../../Components/MovieList/MovieList";
import Filters from "../../Components/Filters/Filters";
import "./Main.scss";
import axios from "axios";
import { BASE_URL } from "../../utils/const/const";
import {
  GET_FILMS_BY_RELEASE_DATE,
  SET_FILTER,
  SET_GENRES,
} from "../../Store/ActionTypes";

export const MainContext = React.createContext();

const Main = ({
  state,
  dispatch,
  setIsMovieDetailsOpened,
  films,
  sortType,
  error,
  fetchFilms,
  genres,
  setFilter,
  setGenre,
}) => {
  const [isFiltersOpen, setisFiltersOpen] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/movies?sortBy=${sortType}&sortOrder=desc${
          genres === "All" ? "&" : `&filter=${genres}&`
        }limit=6`
      )
      .then((res) => {
        const { data } = res.data;
        fetchFilms(data);
      })
      .catch((e) => {
        console.warn(e.message ?? e);
      });
  }, [sortType, genres]);

  return (
    <MainContext.Provider
      value={{ setMovieListOpen: setIsMovieDetailsOpened, state, dispatch }}
    >
      <main className="main">
        <div className="hr"></div>
        <div className="filters__container">
          <Nav genres={genres} setGenre={setGenre} />
          <Filters
            setFilter={setFilter}
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

const mapStateToProps = ({ films, sortType, error, genres }) => {
  return { films, sortType, error, genres };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilms: (payload) => {
      dispatch({ type: GET_FILMS_BY_RELEASE_DATE, payload });
    },
    setFilter: (payload) => {
      dispatch({ type: SET_FILTER, payload });
    },
    setGenre: (payload) => {
      dispatch({ type: SET_GENRES, payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
