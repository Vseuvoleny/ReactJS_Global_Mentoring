import React, { forwardRef, memo } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

const Input = forwardRef(
  (
    {
      title,
      type = "text",
      classes = "",
      defaultValue = "",
      withLabel = true,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`input-container ${classes}`}>
        {withLabel && (
          <label htmlFor={title} className={`${classes} label`}>
            {title}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          id={title}
          defaultValue={defaultValue}
          className={`${classes} input`}
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
  defaultValue: PropTypes.string,
  value: PropTypes.string,
};

export default memo(Input);
