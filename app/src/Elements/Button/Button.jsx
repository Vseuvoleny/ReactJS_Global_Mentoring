import React from "react";
import "./Buttons.scss";

const Button = ({ clickHandler, type, className, text }) => {
  return (
    <div className={className}>
      <button
        className={`${className}__button`}
        type={type}
        onClick={clickHandler}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
