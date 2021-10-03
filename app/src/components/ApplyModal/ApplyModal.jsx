import React from "react";
import PropTypes from "prop-types";
import Button from "../../Elements/Button/Button";
import MovieForm from "../MovieForm/MovieForm";

const ApplyModal = () => {
  return (
    <section className="apply-modal">
      <span>ADD MOVIE</span>
      <MovieForm />
    </section>
  );
};

ApplyModal.propTypes = {};

export default ApplyModal;
