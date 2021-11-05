import React from "react";

export const NavLink = ({ clickHandler, title }) => (
  <li className={`film`} onClick={clickHandler}>
    {title}
  </li>
);
