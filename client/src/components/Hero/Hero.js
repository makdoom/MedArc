import React from "react";
import "./hero.css";

import logo from "../../assets/svg/logo.png";
import logoShadow from "../../assets/svg/arcShadow.svg";

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
              Store your medical data on Blockchain to ensure 100% <br />{" "}
              security and immutability
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
          <div className="logo">
            <svg
              width="301"
              height="298"
              viewBox="0 0 301 298"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M300.053 296.348L155.744 0.156962L-6.29345e-05 297.97C31.0293 263.608 88.336 241.018 153.58 241.947C215.068 242.822 268.914 264.379 300.053 296.348Z"
                fill="url(#paint0_linear_188:10)"
                fill-opacity="0.82"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_188:10"
                  x1="152"
                  y1="89.5"
                  x2="149.985"
                  y2="300.106"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7F4BD2" />
                  <stop offset="1" stop-color="#1CA7EC" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="logoShadow">
            <svg
              width="367"
              height="122"
              viewBox="0 0 367 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f)">
                <ellipse
                  cx="183.5"
                  cy="61"
                  rx="163.5"
                  ry="41"
                  fill="#E3E3E3"
                  fill-opacity="0.75"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f"
                  x="0"
                  y="0"
                  width="367"
                  height="122"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="10"
                    result="effect1_foregroundBlur"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="pulse-container">
            <div className="pulse-1"></div>
          </div>
          <div className="fig-lines">
            <div className="line-container">
              <div className="line1-text">
                <p>Blockchain</p>
                <svg
                  className="line1"
                  width="158"
                  height="172"
                  viewBox="0 0 158 172"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="line-svg"
                    d="M156.5 170.5L1.5 38.5V1.5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>

                {/* <svg
                  className="line1"
                  width="121"
                  height="197"
                  viewBox="0 0 121 197"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="line-svg"
                    d="M119.5 195.5L1.5 67V1"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg> */}
              </div>
              <div className="line2-text">
                <p>Blockchain</p>
                <svg
                className="line2"
                  width="157"
                  height="171"
                  viewBox="0 0 157 171"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                  id="line-svg"
                    d="M1 170L156 38V1"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="line3-text">
                <p>Blockchain</p>
                <svg
                  className="line3"
                  width="218"
                  height="43"
                  viewBox="0 0 218 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="line-svg"
                    d="M218 1H15.7592L1 42"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="line4-text">
                <p>Blockchain</p>
                <svg
                  className="line4"
                  width="218"
                  height="43"
                  viewBox="0 0 218 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="line-svg"
                    d="M3.8147e-06 1H202.241L217 42"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
