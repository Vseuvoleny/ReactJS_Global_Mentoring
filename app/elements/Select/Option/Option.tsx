import React, { FC } from "react";
import { Field } from "formik";
import classes from "./Option.module.scss";
import { IOption } from "./types";

const Option: FC<IOption> = ({ options, name }) => {
  return (
    <div className={classes.option}>
      {options.map((option) => {
        return (
          <label key={option.id} className={classes.option_label}>
            <Field
              type="checkbox"
              name={name}
              value={option.title}
              className={classes.option_checkbox}
            />
            {option.title}
          </label>
        );
      })}
    </div>
  );
};

export default Option;
