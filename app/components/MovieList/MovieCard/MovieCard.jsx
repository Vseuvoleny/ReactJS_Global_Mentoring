import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import CardControler from "../CardContoler/CardControler";
import { MainContext } from "../../../containers/Main/Main";
import classes from "./MovieCard.module.scss";

const MovieCard = ({ image, name, date, type, id, setSearchParams }) => {
  const [isDropDawnOpen, setDropDawnOpen] = useState(false);
  const context = useContext(MainContext);
  const { state, setMovieListOpen, dispatch } = context;

  return (
    <div
      className={classes.card__item}
      onClick={() => {
        setSearchParams({ movieId: id });
      }}
    >
      <picture className={classes.card__image}>
        <CardControler
          isDropDawnOpen={isDropDawnOpen}
          setDropDawnOpen={setDropDawnOpen}
          state={state}
          dispatch={dispatch}
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

MovieCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.number,
};

export default MovieCard;
