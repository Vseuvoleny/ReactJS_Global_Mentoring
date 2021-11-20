import React, { memo } from "react";
import PropTypes from "prop-types";
import "./MovieDetails.module.scss";

const MovieDetails = memo(({ img, title, rating, year, runtime, overview }) => {
  return (
    <section className="movie-details">
      <picture className="movie-details__image">
        <img src={img} alt="" width={323} height={486} />
      </picture>
      <section className="movie-details__description">
        <div className="movie-details__title">
          <span className="name">{title}</span>
          <span className="rate">
            <span>{rating}</span>
          </span>
        </div>
        <div className="movie-details__genre">{"Action & Adventure"}</div>
        <div className="movie-details__year">
          <span className="year">{year}</span>
          <span className="timeing">{runtime}</span>
        </div>
        <div className="movie-details__plot">{overview}</div>
      </section>
    </section>
  );
});

MovieDetails.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
};

export default MovieDetails;
