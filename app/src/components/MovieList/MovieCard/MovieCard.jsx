import React, { useState } from "react";
import PropTypes from "prop-types";
import DropDawn from "../../../Elements/DropDawn/DropDawn";
import Ovals from "../../../Elements/Icon/Icons/Ovals/Ovals";
import CardControler from "../CardContoler/CardControler";
import "./MovieCard.scss";

const MovieCard = ({ image, name, date, type }) => {
  const [isDropDawnOpen, setDropDawnOpen] = useState(false);
  return (
    <div className="card__item">
      <picture className="card__image">
        <CardControler
          isDropDawnOpen={isDropDawnOpen}
          setDropDawnOpen={setDropDawnOpen}
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
