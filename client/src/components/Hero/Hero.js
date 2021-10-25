import React from "react";
import "./hero.css";

import arc from "../../assets/svg/arc.svg";
import arcShadow from "../../assets/svg/arcShadow.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-description">
          <div className="tagline">
            <h2>
              Your Secure Medical <br />
              History Archive
            </h2>
          </div>
          <div className="sub-tagline">
            <p>
              Store your medical data on Blockchain to ensure 100% security and
              immutability
            </p>
          </div>
          <div className="cta-btn">
            <button type="button" className="get-cta-btn">
              <span className="name">Get Started</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img">
          <img src={arc} alt="arc" className="arc" />
          <img src={arcShadow} alt="arcShadow" className="arc-shadow" />

          <div className="pulse-container">
            <div className="pulse-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
