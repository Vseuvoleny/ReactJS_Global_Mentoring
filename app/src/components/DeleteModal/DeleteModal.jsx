import React from "react";
import PropTypes from "prop-types";
import Button from "../../Elements/Button/Button";
import "./DeleteModal.scss";

const DeleteModal = () => {
  return (
    <section className="delete-modal">
      <span className="delete-modal__title">Delete movie</span>
      <span className="delete-modal__request">
        Are you sure you want to delete this movie?
      </span>
      <Button
        className="delete-modal"
        type="button"
        text="confirm"
        clickHandler={() => {}}
      />
    </section>
  );
};

DeleteModal.propTypes = {};

export default DeleteModal;
