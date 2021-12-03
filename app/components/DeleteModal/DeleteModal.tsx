import React, { memo } from "react";
import { Formik } from "formik";
import Button from "../../elements/Button/Button";
import classes from "./DeleteModal.module.scss";

const DeleteModal = memo(() => {
  const onSubmit = (value) => {
    console.log("Submit to delet post", value);
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={{}}>
      {() => {
        <form className={classes.delete_modal}>
          <span className={classes.delete_modal__title}>Delete movie</span>
          <span className={classes.delete_modal__request}>
            Are you sure you want to delete this movie?
          </span>
          <Button type="submit" text="confirm" />
        </form>;
      }}
    </Formik>
  );
});

export default DeleteModal;
