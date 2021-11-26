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
        {/* <ul className="nav-links">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Who We Are
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              What We Do
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>

          <div className="marker"></div>
        </ul> */}
        {/* <div className="burger" onClick={navSlide}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div> */}
      </nav>
    </div>

    // <div className="container-fluid">
    //   <nav>
    //     <div className="logo">
    //       <h3>
    //         Med<span>Arc</span>
    //       </h3>
    //     </div>
    //     <ul className="nav-links">
    //       <li className="nav-link">
    //         <a href="#">HOME</a>
    //       </li>
    //       <li className="nav-link">
    //         <a href="#">WHO WE ARE</a>
    //       </li>
    //       <li className="nav-link">
    //         <a href="#">WHAT WE DO</a>
    //       </li>

    //       <li className="nav-link">
    //         <a href="#">CONTACT US</a>
    //       </li>
    //     </ul>
    //     <div className="burger" onClick={handleNavbar}>
    //       <div className="line1"></div>
    //       <div className="line2"></div>
    //       <div className="line3"></div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default NavBar;
