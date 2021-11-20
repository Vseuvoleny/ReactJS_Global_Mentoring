import React from "react";
import "./Buttons.module.scss";

const Button = ({ clickHandler, type, className, text }) => {
  const filled = type === "submit" || "button" ? "filled" : "outline";

  return (
    <div className={className}>
      <button
        className={`button ${className}__button ${filled}`}
        type={type}
        onClick={clickHandler}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
