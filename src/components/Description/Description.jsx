import React from "react";
import "./Description.scss";

export const Description = ({ children }) => {
  return (
    <div className="text-wrap">
      <p>{children}</p>
    </div>
  );
};
