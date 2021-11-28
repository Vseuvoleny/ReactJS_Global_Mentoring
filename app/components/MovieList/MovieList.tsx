import React, { FC } from "react";
import { IFilm } from "../../types/types";
import MovieCard from "./MovieCard/MovieCard";
import classes from "./MovieList.module.scss";

const MovieList: FC<IFilm[]> = ({ films }) => {
  return (
    <section className={classes.cards__container}>
      <span className={classes.cards__counter}>
        <span>{films.length}</span> movies found
      </span>
      <div className={classes.cards__list}>
        {films.map((f) => (
          <MovieCard
            key={f.id}
            image={f.poster_path}
            name={f.title}
            type={f.genres.join(", ")}
            date={f.release_date.split("-")[0]}
            id={f.id}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
