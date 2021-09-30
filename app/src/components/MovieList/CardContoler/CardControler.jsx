import React from "react";
import Ovals from "../../../Elements/Icon/Icons/Ovals/Ovals";
import PropTypes from "prop-types";
import DropDawn from "../../../Elements/DropDawn/DropDawn";

const CardControler = ({ isDropDawnOpen, setDropDawnOpen }) => {
  if (!isDropDawnOpen) {
    return (
      <Ovals
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        classes={"card__image-icon"}
        onClick={() => setDropDawnOpen(true)}
      />
    );
  }
  return <DropDawn setDropDawnOpen={setDropDawnOpen} />;
};

CardControler.propTypes = {
  isDropDawnOpen: PropTypes.bool,
  setDropDawnOpen: PropTypes.func,
};

export default CardControler;
