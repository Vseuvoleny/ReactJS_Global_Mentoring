import React, { forwardRef, memo } from "react";
import classess from "./Input.module.scss";

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
    const { errors, touched } = rest;

    return (
      <div className={`${classess.input_container} ${classes}`}>
        {withLabel && (
          <label htmlFor={title} className={`${classess.label} ${classes}`}>
            {title}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          id={title}
          value={value}
          className={`${classess.input} ${classes}`}
          onChange={onChange}
          autoComplete="off"
        />
        {errors && touched.title && (
          <div className={`${classess.error - message} ${classes}`}>
            {errors.title}
          </div>
        )}
      </div>
    );
  }
);

export default memo(Input);
