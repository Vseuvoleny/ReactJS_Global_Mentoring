import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";
import Ovals from "../../../Elements/Icon/Icons/Ovals/Ovals";

const MovieCard = ({ image, name, date, type }) => {
  return (
    <div className="card__item">
      <picture className="card__image">
        <Ovals
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          classes={"card__image-icon"}
        />
        <img src={image} alt={name} />
      </picture>
      <div className="card__description">
        <div className="card__film">
          <span className="film-name">{name}</span>
          <span className="film-date">{date}</span>
        </div>
        <span className="card__film-type">{type}</span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  type: PropTypes.string,
};

export default MovieCard;
