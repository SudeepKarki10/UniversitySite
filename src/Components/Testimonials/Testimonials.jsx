import React from "react";
import { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0; // Translate X value for the image moving effect

  const handleNext = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const handleBack = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={handleNext} />
      <img src={back_icon} alt="" className="back-btn" onClick={handleBack} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Joen Doe</h3>
                  <span>Tribhuvan,Nepal</span>
                </div>
              </div>
              <p>
                In my experience all the teachers are very supportive and
                friendly and the placement process has been very smooth
                throughout. I would always be very grateful for the lifelong
                connections I made
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Shakspare Gell</h3>
                  <span>Tribhuvan,Nepal</span>
                </div>
              </div>
              <p>
                My favorite part of studying at Tribhuvan University is having
                the opportunity to learn from such a diverse range of subjects.
                From Mathematics to History, Philosophy to Environment Science,
                each class provides an in depth look into a completely new
                world.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Subare Husk</h3>
                  <span>Tribhuvan,Nepal</span>
                </div>
              </div>
              <p>
                I learnt so much about myself during this time that it’s hard to
                put into words. But what I can say is that I feel like I have
                becomeI have studied here before and it was amazing.
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Grablier Jster</h3>
                  <span>Tribhuvan,Nepal</span>
                </div>
              </div>
              <p>
                In my opinion,the best course I have taken so far has been
                CSE4025 - Data Structures and Algorithms. It was not only I love
                how Tribhuvan university makes you work.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
