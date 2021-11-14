import React, { memo } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ApplyModal from "../../Components/ApplyModal/ApplyModal";
import EditModal from "../../Components/EditModal/EditModal";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import { APPLY_MODAL, EDIT_MODAL, DELETE_MODAL } from "../../Store/ActionTypes";
import { setInactiveModal } from "../../Store/ActionCreator";
import "./ModalContainer.scss";

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
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__container">
        <span
          className="close_icon"
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
