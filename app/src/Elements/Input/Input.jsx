import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = ({
  title,
  type = "text",
  classes = "",
  defaultValue = "",
  ...rest
}) => {
  return (
    <div className={`input-container ${classes}`}>
      <label htmlFor={title} className={`${classes} label`}>
        {title}
      </label>
      <input
        type={type}
        id={title}
        defaultValue={defaultValue}
        className={`${classes} input`}
        {...rest}
        autoComplete="off"
      />
    </div>
  );
};

Input.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
