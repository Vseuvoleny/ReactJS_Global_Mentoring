import React from "react";
import MovieForm from "../MovieForm/MovieForm";
import classes from "./EditModal.module.scss";

const EditModal = () => {
  return (
    <section className={classes.edit_modal}>
      <span className={classes.edit_modal__title}>edit movie</span>
      <MovieForm />
    </section>
  );
};

export default EditModal;
