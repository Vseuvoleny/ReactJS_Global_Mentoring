import React from "react";
import ApplyModal from "../../Components/ApplyModal/ApplyModal";
import EditModal from "../../Components/EditModal/EditModal";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import PropTypes from "prop-types";

const ModalContainer = ({ state }) => {
  const defineModal = ({ modal }) => {
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
  };

  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__container">
        <span>&#10060;</span>
        {defineModal(state)}
      </div>
    </div>
  );
};
ModalContainer.propTypes = {
  state: PropTypes.string,
};

export default ModalContainer;
