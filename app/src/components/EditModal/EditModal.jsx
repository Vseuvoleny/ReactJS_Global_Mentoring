import React, { memo } from "react";
import MovieForm from "../MovieForm/MovieForm";
import "./EditModal.scss";

const EditModal = memo(() => {
  return (
    <section className="edit-modal">
      <span className="edit-modal__title">edit movie</span>
      <MovieForm />
    </section>
  );
});

export default EditModal;
