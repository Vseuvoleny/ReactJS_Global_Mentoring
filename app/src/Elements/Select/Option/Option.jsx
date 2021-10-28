import React from "react";
import PropTypes from "prop-types";
import "./Option.scss";

const Option = ({ onChange, classes = "", title }) => {
  return (
    <>
      <input
        type="checkbox"
        name={title}
        id={title}
        className="option-checkbox"
      />
      <label
        className={`option-label ${classes}`}
        htmlFor={title}
        onChange={onChange}
      >
        {title}
      </label>
    </>
  );
};

Option.propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.string,
  title: PropTypes.string,
};

export default Option;
