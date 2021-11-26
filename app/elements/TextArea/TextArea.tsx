import React from "react";
import PropTypes from "prop-types";
import classes from "./TextArea.module.scss";

const TextArea = ({ title, value, onChange, ...rest }) => {
  const { errors, touched } = rest;
  return (
    <div className={classes.textarea_container}>
      <label html={title} className={classes.textarea_container__title}>
        {title}
      </label>
      <textarea
        id={title}
        className={classes.textarea_container__textarea}
        placeholder="Movie description"
        value={value}
        onChange={onChange}
      ></textarea>
      {errors && touched.overview && (
        <div className={classes.error_message}>{errors.overview}</div>
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
