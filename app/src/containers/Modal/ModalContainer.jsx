import React from "react";
import PropTypes from "prop-types";

const ModalContainer = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__container">
        <span>&#10060;</span>
        {children}
      </div>
    </div>
  );
};
ModalContainer.propTypes = {
  children: PropTypes.node,
};

export default ModalContainer;
