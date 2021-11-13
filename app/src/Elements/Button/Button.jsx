import React from "react";
import "./Buttons.scss";

const Button = ({ clickHandler, type, className, text }) => {
  const filled = type === "submit" || "button" ? "filled" : "outline";

  return (
    <div className={className}>
      <button
        className={`${className}__button ${filled}`}
        type={type}
        onClick={clickHandler}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
