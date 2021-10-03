import React from "react";
import PropTypes from "prop-types";
import Button from "../../Elements/Button/Button";

const DeleteModal = () => {
  return (
    <section className="delete-modal">
      <span>Delete MOVIE</span>
      <span>Are you sure you want to delete this movie?</span>
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
