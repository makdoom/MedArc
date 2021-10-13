import React from "react";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="container">
        <div className="hero-container">
          <Hero />
        </div>
        <div className="scroll-more-container">
          <div className="circle">
            <div className="circle-text">
              <p>Scroll for more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
