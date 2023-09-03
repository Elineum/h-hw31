import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuItem.scss";

export const MenuItem = ({ name, href }) => {
  return (
    <li className="menu-item">
      <NavLink className="menu-item__link" to={href}>
        {name}
      </NavLink>
    </li>
  );
};
