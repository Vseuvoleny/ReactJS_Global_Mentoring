import React from "react";
import PropTypes from "prop-types";
import "./TextArea.scss";

const TextArea = ({ title, value, onChange, ...rest }) => {
  const { errors, touched } = rest;
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
      {errors && touched.overview && (
        <div className="error-message">{errors.overview}</div>
      )}
    </div>
  );
};

TextArea.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
