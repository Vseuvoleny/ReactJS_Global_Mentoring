import React from "react";
import PropTypes from "prop-types";
import MovieForm from "../MovieForm/MovieForm";
import "./ApplyModal.scss";
const ApplyModal = () => {
  return (
    <section className="apply-modal">
      <span className="apply-modal__title">add movie</span>
      <MovieForm />
    </section>
  );
};

ApplyModal.propTypes = {};

export default ApplyModal;
