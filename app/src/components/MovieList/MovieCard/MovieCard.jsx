import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import CardControler from "../CardContoler/CardControler";
import { MainContext } from "../../../Containers/Main/Main";
import "./MovieCard.scss";

const MovieCard = ({ image, name, date, type, id, setSearchParams }) => {
  const [isDropDawnOpen, setDropDawnOpen] = useState(false);
  const context = useContext(MainContext);
  const rdispatch = useDispatch();
  const { state, dispatch } = context;

  return (
    <div
      className="card__item"
      onClick={() => {
        setSearchParams({ movieId: id });
      }}
    >
      <picture className="card__image">
        <CardControler
          isDropDawnOpen={isDropDawnOpen}
          setDropDawnOpen={setDropDawnOpen}
          state={state}
          dispatch={dispatch}
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
  id: PropTypes.number,
  setSearchParams: PropTypes.func,
};

export default MovieCard;
