import React from "react";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import "./home.css";

const Home = () => {
<<<<<<< HEAD
=======
  // const circleText = document.querySelector('.circle-text');
  // circleText.innerHTML = circleText.innerText.split("")
  // circleText.innerHTML.map((character, index) => {
  //   `<span>${character}</span>`
  // }).join("");
>>>>>>> c90f8c247d999a10a5a7ccca1a50ea955f316e10
  return (
    <div className="home-container">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="container">
        <div className="hero-container">
          <Hero />
        </div>
<<<<<<< HEAD
        <div className="scroll-more-container">
=======
        {/* <div className="scroll-more-container">
>>>>>>> c90f8c247d999a10a5a7ccca1a50ea955f316e10
          <div className="circle">
            <div className="circle-text">
              <p>Scroll for more</p>
            </div>
          </div>
<<<<<<< HEAD
        </div>
=======
        </div> */}
>>>>>>> c90f8c247d999a10a5a7ccca1a50ea955f316e10
      </div>
    </div>
  );
};

export default Home;
