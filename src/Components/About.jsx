import React from "react";
import "../Components/css/Components/about.css";
import { about } from "../json/about";
const About = () => {
  return (
    <div>
      {about.map((a) => (
        <div className="about-box">
          <div className="about-image-box">
            <img src={a.aboutImage} alt="" />
          </div>
          <div className="about-content-box">
            <p>
              <span>-</span> About ME
            </p>
            <div className="about-name">
              <h1>Who Is</h1>
              <p>{a.name + "?"}</p>
            </div>
            <p>{a.aboutMe}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
