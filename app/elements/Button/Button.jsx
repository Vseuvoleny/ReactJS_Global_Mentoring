import React from "react";
import classes from "./Buttons.module.scss";

const Button = ({ clickHandler, type, className, text }) => {
  return (
    <div>
      <button
        className={`${classes.button} ${className}__button ${
          type === "submit" || "button" ? classes.filled : classes.outline
        }`}
        type={type}
        onClick={clickHandler}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
