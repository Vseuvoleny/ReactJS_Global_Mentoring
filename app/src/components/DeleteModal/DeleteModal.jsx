import { useFormik } from "formik";
import React, { memo } from "react";
import Button from "../../Elements/Button/Button";
import "./DeleteModal.scss";

const DeleteModal = memo(() => {
  const formik = useFormik({
    onSubmit: () => {},
  });
  return (
    <form className="delete-modal" onSubmit={formik.handleSubmit}>
      <span className="delete-modal__title">Delete movie</span>
      <span className="delete-modal__request">
        Are you sure you want to delete this movie?
      </span>
      <Button
        className="delete-modal"
        type="submit"
        text="confirm"
        clickHandler={() => {}}
      />
    </form>
  );
});

export default DeleteModal;
