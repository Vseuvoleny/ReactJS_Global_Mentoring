import React from "react";
import classes from "./NavLink.module.scss";

export const NavLink = ({ clickHandler, title, activeLink }) => {
  return (
    <li
      className={`${classes.film} ${activeLink === title ? "active" : ""}`}
      onClick={clickHandler}
    >
      {title}
    </li>
  );
};
