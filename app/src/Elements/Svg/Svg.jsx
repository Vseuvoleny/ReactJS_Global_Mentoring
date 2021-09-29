import React from "react";
import PropTypes from "prop-types";

const Svg = ({ children }) => {
  return <>{children}</>;
};

Svg.propTypes = {
  children: PropTypes.node,
};

export default Svg;
