import React from "react";
import "./navBar.css";

import arc from '../../assets/images/arc.svg';

const NavBar = () => {
  
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("nav-active")
    burger.classList.toggle("active")
  }
  return (
    <div className="container">
    <nav>
      <div className="logo">
        <img className="logo-img" src={arc} alt="" />
        <h4 className="logo-text">MedArc</h4>
      </div>
      <ul className="nav-links">
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Service</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
      </ul>
      <div className="burger" onClick={navSlide} >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

    </div>
  );
};

export default NavBar;
