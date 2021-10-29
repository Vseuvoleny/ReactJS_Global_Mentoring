import React, { forwardRef, memo } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = forwardRef(
  (
    {
      classes,
      title,
      type = "text",
      value = "",
      withLabel = true,
      onChange,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`input-container ${classes}`}>
        {withLabel && (
          <label htmlFor={title} className={`label ${classes}`}>
            {title}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          id={title}
          value={value}
          className={`input ${classes}`}
          onChange={onChange}
          {...rest}
          autoComplete="off"
        />
      </div>
    );
  }
);

Input.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  withLabel: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(Input);
