import React, { useState } from "react";
import PropTypes from "prop-types";
import RedTriangle from "../Icon/Icons/RedTriangle/RedTriangle";
import Option from "./Option/Option";
import "./Select.scss";

// TODO
// сделать закрытие через outsideclick

const Select = ({ placeholder, label, value, options, name, ...rest }) => {
  const [isListOpen, setListOpen] = useState(false);
  const { errors, touched } = rest;
  return (
    <div className="select-input">
      <span className="label">{label}</span>
      <div
        className="select-input__box"
        onClick={() => setListOpen(!isListOpen)}
      >
        {value.length > 0 ? value.join(", ") : placeholder}
        <div className="expanded-list">
          <span className="expanded-list__icon">
            <RedTriangle viewBox="0 0 10 7" width="10" height="7" fill="none" />
          </span>
        </div>
      </div>
      {errors && touched.genres && (
        <div className="error-message">{errors.genres}</div>
      )}
      {isListOpen && <Option options={options} name={name} />}
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Select;
