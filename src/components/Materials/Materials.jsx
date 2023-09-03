import React from "react";
import materialsdata from "../../mockDatas/materialsData.js";
import "./Materials.scss";

export const Materials = () => {
  return (
    <div className="materials">
      <ul className="materials__list">
        {materialsdata.map(({ material }, index) => (
          <li className="materials__item" key={index}>
            {material}
          </li>
        ))}
      </ul>
    </div>
  );
};
