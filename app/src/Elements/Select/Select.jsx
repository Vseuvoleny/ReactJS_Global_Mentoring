import React, { useState } from "react";
import { FieldProps } from "formik";
import PropTypes from "prop-types";
import RedTriangle from "../Icon/Icons/RedTriangle/RedTriangle";
import Option from "./Option/Option";
import "./Select.scss";

const Select = ({ placeholder, label, options, onChange }) => {
  const [isListOpen, setListOpen] = useState(false);
  const [option, setOption] = useState([1, 2]);

  // const onChange = (opt) => {
  //   setOption(
  //     option.includes(opt)
  //       ? option.filter((g) => g !== opt)
  //       : (prev) => [...prev, opt]
  //   );
  // };

  return (
    <div className="select-input">
      <span className="label">{label}</span>
      <div className="select-input__box">
        {option.length > 0 ? option.join(", ") : placeholder}
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
          {options.map((g) => (
            <Option
              key={g.id}
              onClick={() => onChange(option)}
              title={g.title}
            />
          ))}
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

// TODO
// сделать закрытие через outsideclick
