import React, { forwardRef } from "react";
import Icon from "./Icon";

const createIcon = (path) => {
  return forwardRef((props, ref) => {
    return (
      <Icon ref={ref} {...props}>
        {path}
      </Icon>
    );
  });
};

export default createIcon;
