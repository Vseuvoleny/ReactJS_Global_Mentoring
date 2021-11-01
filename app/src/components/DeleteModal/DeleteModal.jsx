import React, { memo } from "react";
import { Formik } from "formik";
import Button from "../../Elements/Button/Button";
import "./DeleteModal.scss";

const DeleteModal = memo(() => {
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Formik onSubmit={onSubmit}>
      {() => {
        <form className="delete-modal">
          <span className="delete-modal__title">Delete movie</span>
          <span className="delete-modal__request">
            Are you sure you want to delete this movie?
          </span>
          <Button className="delete-modal" type="submit" text="confirm" />
        </form>;
      }}
    </Formik>
  );
});

export default DeleteModal;
