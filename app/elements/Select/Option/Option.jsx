import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import classes from "./Option.module.scss";

const Option = ({ options, name }) => {
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

Option.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
};

export default Option;
