import React, { FC } from "react";
import Link from "next/link";
import classes from "./NavLink.module.scss";
import { INavLink } from "./types";

export const NavLink: FC<INavLink> = ({ title, activeLink, clickHandler }) => {
  return (
    <li
      className={`${classes.film} ${activeLink === title ? "active" : ""}`}
      onClick={clickHandler}
    >
      {title}
    </li>
  );
};
