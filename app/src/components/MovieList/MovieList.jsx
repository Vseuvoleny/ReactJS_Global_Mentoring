import React from "react";
import PropTypes from "prop-types";
import "./MovieList.scss";
import MovieCard from "./MovieCard/MovieCard";

const MovieList = ({ films, state, dispatch }) => {
  return (
    <section className="cards__container">
      <span className="cards__counter">
        <span>{films.length}</span> movies found
      </span>
      <div className="cards__list">
        {films.map((c) => (
          <MovieCard
            image={c.image}
            name={c.name}
            key={c.id}
            type={c.type}
            date={c.date}
            dispatch={dispatch}
            state={state}
          />
        ))}
      </div>
    </section>
  );
};

MovieList.propTypes = {
  films: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.number,
  }),
  dispatch: PropTypes.func,
  state: PropTypes.string,
};

export default MovieList;
