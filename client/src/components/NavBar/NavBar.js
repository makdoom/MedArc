import React, { useEffect } from "react";
import "./navBar.css";

const NavBar = () => {
  useEffect(() => {
    let marker = document.querySelector(".marker");
    let items = document.querySelectorAll(".nav-menu a");
    items.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        marker.style.left = e.target.offsetLeft + "px";
        marker.style.width = e.target.offsetWidth + "px";
        link.classList.add("active");
        link.addEventListener("mouseleave", (e) =>
          link.classList.remove("active")
        );
      });
    });
  });
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <h3 className="logo-text">
            <span>Med</span>Arc
          </h3>
        </div>
        <div className="nav-menu">
          <div className="marker"></div>
          <a href="#home">Home</a>
          <a href="#about">Who We Are</a>
          <a href="#service">what we do</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
