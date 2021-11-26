import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const defaultViewBox = "0 0 24 24";
const getSize = (viewBox) => {
  const [, , width, height] = viewBox.split(" ");
  return {
    width,
    height,
  };
};

const Icon = forwardRef((props, ref) => {
  const {
    children,
    onClick,
    viewBox = defaultViewBox,
    classes,
    htmlColor,
    ...rest
  } = props;
  return (
    <svg
      ref={ref}
      onClick={onClick}
      viewBox={viewBox}
      role="img"
      className={classes}
      color={htmlColor}
      {...getSize(viewBox)}
      {...rest}
    >
      {children}
    </svg>
  );
});

Icon.propTypes = {
  children: PropTypes.node,
};

export default Icon;
