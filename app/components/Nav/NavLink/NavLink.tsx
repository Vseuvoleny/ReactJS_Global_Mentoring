import React from "react";
import Link from "next/link";
import classes from "./NavLink.module.scss";

export const NavLink = ({ title, activeLink, clickHandler }) => {
  return (
    <li
      className={`${classes.film} ${activeLink === title ? "active" : ""}`}
      onClick={clickHandler}
    >
      {title}
    </li>
  );
};
