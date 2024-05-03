import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-image" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's leaders Today</h2>
        <p>
          Discover our university, a beacon of learning and innovation where
          knowledge meets opportunity. Our university is more than just a
          collection of buildings; it's a vibrant community driven by a passion
          for excellence and a commitment to making a difference
        </p>
        <p>
          We're not just educating minds; we're shaping futures. Our "About"
          section is your gateway to understanding how we're pushing boundaries
          in research, embracing diversity, and fostering a culture of
          creativity and collaboration. Whether you're a prospective student, a
          curious parent, or a potential partner, we invite you to delve into
          our world and discover why this uni is more than just a
          university—it's a transformative force in education and beyond.
        </p>
      </div>
    </div>
  );
};

export default About;
