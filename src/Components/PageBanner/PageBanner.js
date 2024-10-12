import React from "react";
import "./PageBanner.css"

const PageBanner = ({ cover }) => {
  return (
    <div className="PageBanner">
      <img src={cover} alt="" />
    </div>
  );
};

export default PageBanner;
