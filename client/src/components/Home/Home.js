import React from "react";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar__container">
        <NavBar />
      </div>
      <div className="container">
        <div className="hero-container">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
