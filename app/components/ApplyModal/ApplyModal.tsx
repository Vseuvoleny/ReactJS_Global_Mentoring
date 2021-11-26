import React, { memo } from "react";
import MovieForm from "../MovieForm/MovieForm";
import classes from "./ApplyModal.module.scss";

const ApplyModal = memo(() => {
  return (
    <section className={classes.apply_modal}>
      <span className={classes.apply_modal__title}>add movie</span>
      <MovieForm />
    </section>
  );
});

export default ApplyModal;
