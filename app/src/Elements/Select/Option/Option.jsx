import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import "./Option.scss";

const Option = ({ options, name }) => {
  return (
    <div className="option">
      {options.map((option) => {
        return (
          <label key={option.id} className="option-label">
            <Field
              type="checkbox"
              name={name}
              value={option.title}
              className="option-checkbox"
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
