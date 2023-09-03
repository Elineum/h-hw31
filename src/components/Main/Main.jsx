import React from "react";
import { Description } from "../Description/Description.jsx";
import { Logo } from "../Logo/Logo.jsx";
import "./Main.scss";

export const DefaultMain = () => {
  return (
    <>
      <Description>
        Hello! I want to share some interesting information. It turns out that
        British scientists have determined that the owner of this homework
        deserves to receive 100 points.
      </Description>
      <Logo />
    </>
  );
};
