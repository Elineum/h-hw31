import React from "react";
import { MenuItem } from "../ManuItem/MenuItem.jsx";
import "./Header.scss";

const categoryList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Questions",
    href: "/questions",
  },
  {
    name: "Materials",
    href: "/materials",
  },
  {
    name: "Contacts",
    href: "/contacts",
  },
];

export const Header = () => {
  return (
    <header className="page-head">
      <nav className="page-head__nav">
        <ul className="page-head__nav-list">
          {categoryList.map(({ name, href }, index) => (
            <MenuItem key={index} href={href} name={name} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
