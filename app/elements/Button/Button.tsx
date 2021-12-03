import React, { FC } from "react";
import cn from "classnames";
import classes from "./Buttons.module.scss";
import { IButton } from "./types";

const Button: FC<IButton> = ({ clickHandler, type, text }) => {
  const cls = cn(classes.button, {
    button: type === "button",
    reset: type === "reset",
    submit: type === "submit",
  });

  return (
    <div>
      <button className={cls} type={type} onClick={clickHandler}>
        {text}
      </button>
    </div>
  );
};

export default Button;
