import React, { memo } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ApplyModal from "../../components/ApplyModal/ApplyModal";
import EditModal from "../../components/EditModal/EditModal";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { APPLY_MODAL, EDIT_MODAL, DELETE_MODAL } from "../../store/ActionTypes";
import { setInactiveModal } from "../../store/ActionCreator";
import classes from "./ModalContainer.module.scss";

const ModalContainer = memo(({ modalStore }) => {
  const dispatch = useDispatch();
  const defineModal = (modalType) => {
    switch (modalType) {
      case APPLY_MODAL:
        return <ApplyModal />;
      case EDIT_MODAL:
        return <EditModal />;
      case DELETE_MODAL:
        return <DeleteModal />;
      default:
        return undefined;
    }
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modal__overlay}></div>
      <div className={classes.modal__container}>
        <span
          className={classes.close_icon}
          onClick={() => dispatch(setInactiveModal())}
        >
          &#x2715;
        </span>
        {defineModal(modalStore)}
      </div>
    </div>
  );
});

ModalContainer.propTypes = {
  modalStore: PropTypes.string,
};

export default ModalContainer;
