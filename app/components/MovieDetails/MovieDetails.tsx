import React, { FC } from "react";
import classes from "./MovieDetails.module.scss";
import { IMovieDetails } from "./types";

const MovieDetails: FC<IMovieDetails> = ({ film }) => {
  const { poster_path, title, vote_average, year, runtime, overview, genres } =
    film;

  return (
    <section className={classes.movie_details}>
      <picture className={classes.movie_details__image}>
        <img
          src={poster_path as string}
          alt={title as string}
          width={323}
          height={486}
        />
      </picture>
      <section className={classes.movie_details__description}>
        <div className={classes.movie_details__title}>
          <span className={classes.name}>{title}</span>
          <span className={classes.rate}>
            <span>{vote_average}</span>
          </span>
        </div>
        <div className={classes.movie_details__genre}>
          {(genres as string[]).join(", ")}
        </div>
        <div className={classes.movie_details__year}>
          <span className={classes.year}>{year}</span>
          <span className={classes.timeing}>{runtime}</span>
        </div>
        <div className={classes.movie_details__plot}>{overview}</div>
      </section>
    </section>
  );
};

export default MovieDetails;
