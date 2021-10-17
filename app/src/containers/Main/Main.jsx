import React, { useState } from "react";
import { useEffectOnce } from "../../utils/hooks/useEffectOnce";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchFilms } from "../../Store/ActionsCreator";
import Nav from "../../Components/Nav/Nav";
import MovieList from "../../Components/MovieList/MovieList";
import "./Main.scss";
import Filters from "../../Components/Filters/Filters";

export const MainContext = React.createContext();

const Main = ({ state, dispatch, setIsMovieDetailsOpened, films }) => {
  const [isFiltersOpen, setisFiltersOpen] = useState(false);

  useEffectOnce(fetchFilms);

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
        <MovieList films={films} />
      </main>
    </MainContext.Provider>
  );
};

Main.propTypes = {
  state: PropTypes.string,
  dispatch: PropTypes.func,
  setIsMovieDetailsOpened: PropTypes.func,
};

const mapStateToProps = ({ films }) => {
  return { films };
};

export default connect(mapStateToProps, fetchFilms)(Main);
