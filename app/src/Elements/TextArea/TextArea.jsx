import React from "react";
import PropTypes from "prop-types";
import "./TextArea.scss";

const TextArea = ({ title }) => {
  return (
    <div className="textarea-container">
      <label html={title} className="textarea-container__title">
        {title}
      </label>
      <textarea
        id={title}
        className="textarea-container__textarea"
        placeholder="Movie description"
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {};

export default TextArea;
