import React, { useEffect } from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard/MovieCard";
import "./MovieList.scss";

const MovieList = ({ films }) => {
  return (
    <section className="cards__container">
      <span className="cards__counter">
        <span>{films.length}</span> movies found
      </span>
      <div className="cards__list">
        {films.map((f) => (
          <MovieCard
            image={f.poster_path}
            name={f.title}
            key={f.id}
            type={f.genres.join(", ")}
            date={f.release_date.split("-")[0]}
            id={f.id}
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
};

export default MovieList;
