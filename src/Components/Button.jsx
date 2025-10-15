import React from "react";
import "./css/Components/greet.css";
// import greet from '../json/greet'
import rajesh from "../assets/rajesh.png";
const Button = () => {
  return (
    <div className="greet">
      <div className="greet-text">
        <div className="greet-name">
          <p>
            I'm <span>Rajesh,</span> Fullstack Developer based in india
          </p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            eaque, ut necessitatibus accusantium culpa asperiores numquam
            deleniti, totam quaerat, inventore ipsum repellat atque eius iure
            odit repellendus libero repudiandae voluptate.
          </span>
        </div>
        <div className="btn-portfolio">
          <button className="portfolio-btn">
            <span className="txt">download button</span>
            <span className="icon">▶</span>
          </button>
          <button className="btn-projects">projects</button>
        </div>
      </div>
      <div className="greet-image">
        <div className="bg-desighn"></div>
        <div className="greet-img">
          <img src={rajesh} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Button;
