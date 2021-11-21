import React from "react";
import cn from "classnames";
import classes from "./Buttons.module.scss";

const Button = ({ clickHandler, type, className, text }) => {
  const cls = cn({
    button: type === "button",
    reset: type === "reset",
    submit: type === "submit",
  });

  return (
    <div>
      <button
        className={`${classes.button} ${cls}`}
        type={type}
        onClick={clickHandler}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
