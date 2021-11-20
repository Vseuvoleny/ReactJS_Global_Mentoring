import React, { memo } from "react";
import PropTypes from "prop-types";
import classes from "./MovieDetails.module.scss";

const MovieDetails = memo(({ img, title, rating, year, runtime, overview }) => {
  return (
    <section className={classes.movie_details}>
      <picture className={classes.movie_details__image}>
        <img src={img} alt="" width={323} height={486} />
      </picture>
      <section className={classes.movie_details__description}>
        <div className={classes.movie_details__title}>
          <span className={classes.name}>{title}</span>
          <span className={classes.rate}>
            <span>{rating}</span>
          </span>
        </div>
        <div className={classes.movie_details__genre}>
          {"Action & Adventure"}
        </div>
        <div className={classes.movie_details__year}>
          <span className={classes.year}>{year}</span>
          <span className={classes.timeing}>{runtime}</span>
        </div>
        <div className={classes.movie_details__plot}>{overview}</div>
      </section>
    </section>
  );
});

MovieDetails.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
};

export default MovieDetails;
