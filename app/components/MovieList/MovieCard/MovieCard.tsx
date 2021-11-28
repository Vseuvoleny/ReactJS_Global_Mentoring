import React, { useState, FC } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import CardControler from "../CardContoler/CardControler";
import classes from "./MovieCard.module.scss";
import { IMovieCard } from "./types";

const MovieCard: FC<IMovieCard> = ({ image, name, date, type, id }) => {
  const [isDropDawnOpen, setDropDawnOpen] = useState(false);
  const router = useRouter();

  return (
    <div
      className={classes.card__item}
      onClick={() => {
        router.push({
          pathname: router.pathname,
          query: { ...router.query, movieId: id },
        });
      }}
    >
      <picture className={classes.card__image}>
        <CardControler
          isDropDawnOpen={isDropDawnOpen}
          setDropDawnOpen={setDropDawnOpen}
        />
        <img src={image} alt={name} />
      </picture>
      <div className={classes.card__description}>
        <div className={classes.card__film}>
          <span className={classes.film_name}>{name}</span>
          <span className={classes.film_date}>{date}</span>
        </div>
        <span className={classes.card__film_type}>{type}</span>
      </div>
    </div>
  );
};

export default MovieCard;
