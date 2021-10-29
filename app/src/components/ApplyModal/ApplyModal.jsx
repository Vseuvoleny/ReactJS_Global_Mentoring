import React from "react";
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

export default ApplyModal;
