import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Select.scss";

const Select = ({ placeholder }) => {
  const [option, setOption] = useState("");
  const [isListOpen, setListOpen] = useState(false);
  return (
    <div className="select-input">
      <span className="label">genre</span>
      <div className="select-input__box">
        {placeholder}
        <div className="expanded-icon">
          <span onClick={() => setListOpen(!isListOpen)}>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.13423 0C0.286533 0 -0.176668 0.988581 0.365828 1.63996L8.22615 11.0779C8.6258 11.5578 9.36265 11.558 9.76259 11.0784L17.6322 1.64041C18.1752 0.989135 17.7121 0 16.8642 0H1.13423Z"
                fill="#F65261"
              />
            </svg>
          </span>
          {isListOpen && (
            <div className="options-list">
              <div>Genre 1</div>
              <div>Genre 2</div>
              <div>Genre 3</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string,
};

export default Select;
