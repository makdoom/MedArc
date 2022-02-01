import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Service from "../Service/Service";
import Contact from '../Contact/Contact'
import Testimonial from '../Testimonial/Testimonial'
import "./main.css";

export default function Main() {
  return (
    <div className="main-container">
      <section className="home" id="home">
        <Home />
      </section>
      <section className="about" id="about">
        <About />
      </section>
      <div id="move-text-container">
        <div className="move-text">
          <span className="vision">Our Vision</span> <br />
          <h1 className="main-head">make the world a healthier place... ! </h1>
        </div>
      </div>
      <section className="Service" id="service">
        <Service />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer>
        <div className="design">
          <p>
            Design and Developed by{" "}
            <a href="https://makdoom.github.io/">Makdoom Shaikh</a> With ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
