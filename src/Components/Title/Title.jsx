import React from "react";
import "./Title.css";

const Title = ({ title, subtitle }) => {
  return (
    <div className="title container">
      <p className="heading">{title}</p>
      <h2 className="subheading">{subtitle}</h2>
    </div>
  );
};

export default Title;
