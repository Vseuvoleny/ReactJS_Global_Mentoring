import React from "react";
import { useLocation } from "react-router-dom";
import "./NavLink.scss";

export const NavLink = ({ clickHandler, title, activeLink }) => {
  return (
    <li
      className={`film ${activeLink === title ? "active" : ""}`}
      onClick={clickHandler}
    >
      {title}
    </li>
  );
};
