import React, { memo } from "react";
import PropTypes from "prop-types";
import "./Option.scss";

const Option = memo(({ onClick, classes = "", title }) => {
  return (
    <label className={`option-label ${classes}`} onClick={onClick}>
      {title}
    </label>
  );
});

Option.propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.string,
  title: PropTypes.string,
};

export default Option;
