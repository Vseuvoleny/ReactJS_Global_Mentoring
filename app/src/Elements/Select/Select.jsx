import React, { useState } from "react";
import PropTypes from "prop-types";
import RedTriangle from "../Icon/Icons/RedTriangle/RedTriangle";
import Option from "./Option/Option";
import { Field } from "formik";
import "./Select.scss";

// TODO
// сделать закрытие через outsideclick

const Select = ({ placeholder, label, values, options, name, ...rest }) => {
  const [isListOpen, setListOpen] = useState(false);

  return (
    <div className="select-input">
      <span className="label">{label}</span>
      <div className="select-input__box">
        {values.length > 0 ? values.join(", ") : placeholder}
        <div className="expanded-list">
          <span
            onClick={() => setListOpen(!isListOpen)}
            className="expanded-list__icon"
          >
            <RedTriangle viewBox="0 0 10 7" width="10" height="7" fill="none" />
          </span>
        </div>
      </div>
      {isListOpen && (
        <div className="options">
          <Field name={name}>
            {({ field }) =>
              options.map((option) => (
                <React.Fragment key={option.key}>
                  <input
                    type="checkbox"
                    id={option.title}
                    value={option.title}
                    checked={field.value.includes(option.title)}
                    {...field}
                    {...rest}
                  />
                  <label htmlFor={option.title}>{option.title}</label>
                </React.Fragment>
              ))
            }
          </Field>
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Select;
