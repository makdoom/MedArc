import "./App.css";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/service/Service";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app-container">
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
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer>
        <div className="design">
          <p>Design and Developed by <a href="https://makdoom.github.io/">Makdoom Shaikh</a> With ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
