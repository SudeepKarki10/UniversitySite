import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Empowering Minds, Shaping Futures.</h1>
        <p>
          At our education institution, we believe in nurturing curious minds
          and fostering a passion for learning that extends beyond the classroom
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
