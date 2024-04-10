import React from "react";
import galary_1 from "../../assets/gallery-1.png";
import galary_2 from "../../assets/gallery-2.png";
import galary_3 from "../../assets/gallery-3.png";
import galary_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
import "./Campus.css";
import Title from "../Title/Title";

const Campus = () => {
  return (
    <div className="campus container">
      <div className="galary">
        <img src={galary_1} alt="" />
        <img src={galary_2} alt="" />
        <img src={galary_3} alt="" />
        <img src={galary_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here
        <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
