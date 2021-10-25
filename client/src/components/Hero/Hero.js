import React from "react";
import "./hero.css";

import logo from "../../assets/svg/logo.png";
import arcShadow from "../../assets/svg/arcShadow.svg";
import line1 from "../../assets/svg/line1.svg";

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
          <img src={logo} alt="logo" className="arc"/>
          <img src={arcShadow} alt="arcShadow" />

          <div className="pulse-container">
            <div className="pulse-1"></div>
          </div>
          <div className="fig-lines">
            <div className="line1-container">
              <div className="line1-text">
                <p>Blockchain</p>
                <img src={line1} alt="" className="line1"/>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
