import React from "react";
import PropTypes from "prop-types";
import MovieForm from "../MovieForm/MovieForm";
import "./EditModal.scss";

const EditModal = () => {
  return (
    <section className="edit-modal">
      <span className="edit-modal__title">edit movie</span>
      <MovieForm />
    </section>
  );
};

EditModal.propTypes = {};

export default EditModal;
