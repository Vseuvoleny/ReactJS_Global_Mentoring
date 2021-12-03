import React, { FC, useState } from "react";
import RedTriangle from "../Icon/Icons/RedTriangle/RedTriangle";
import Option from "./Option/Option";
import classes from "./Select.module.scss";
import { ISelect } from "./types";

// TODO
// сделать закрытие через outsideclick

const Select: FC<ISelect> = ({
  placeholder,
  label,
  value,
  options,
  name,
  ...rest
}) => {
  const [isListOpen, setListOpen] = useState(false);
  const { errors, touched } = rest;

  return (
    <div className={classes.select_input}>
      <span className={classes.label}>{label}</span>
      <div
        className={classes.select_input__box}
        onClick={() => setListOpen(!isListOpen)}
      >
        {value.length > 0 ? value.join(", ") : placeholder}
        <div className={classes.expanded_list}>
          <span className={classes.expanded_list__icon}>
            <RedTriangle viewBox="0 0 10 7" width="10" height="7" fill="none" />
          </span>
        </div>
      </div>
      {errors && touched.genres && (
        <div className={classes.error_message}>{errors.genres}</div>
      )}
      {isListOpen && <Option options={options} name={name} />}
    </div>
  );
};

export default Select;
