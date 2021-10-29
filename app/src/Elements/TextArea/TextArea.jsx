import React from "react";
import PropTypes from "prop-types";
import "./TextArea.scss";

const TextArea = ({ title, value, onChange }) => {
  return (
    <div className="textarea-container">
      <label html={title} className="textarea-container__title">
        {title}
      </label>
      <textarea
        id={title}
        className="textarea-container__textarea"
        placeholder="Movie description"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
