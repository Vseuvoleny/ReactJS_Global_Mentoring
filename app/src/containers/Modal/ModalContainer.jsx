import React, { useCallback } from "react";
import PropTypes from "prop-types";
import ApplyModal from "../../Components/ApplyModal/ApplyModal";
import EditModal from "../../Components/EditModal/EditModal";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import "./ModalContainer.scss";

const ModalContainer = ({ state, dispatch }) => {
  const defineModal = useCallback(
    (modal) => {
      switch (modal) {
        case "apply":
          return <ApplyModal />;
        case "edit":
          return <EditModal />;
        case "delete":
          return <DeleteModal />;
        default:
          return undefined;
      }
    },
    [state]
  );

  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__container">
        <span className="close_icon" onClick={() => dispatch({ type: "" })}>
          &#x2715;
        </span>

        {defineModal(state)}
      </div>
    </div>
  );
};
ModalContainer.propTypes = {
  state: PropTypes.string,
};

export default ModalContainer;
