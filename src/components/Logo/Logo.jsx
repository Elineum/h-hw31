import React from "react";
import "./Logo.scss";

const defaultImgLink =
  "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/3/9/9/114399_Research-scientists-in-lab_Alamy-CT17X6.jpg";

export const Logo = () => {
  return (
    <div className="image-holder">
      <div className="image-holder__image-wrap">
        <img src={defaultImgLink} alt="logo-img" />
      </div>
    </div>
  );
};
