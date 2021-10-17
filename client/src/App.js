import "./App.css";

import Home from "./components/Home/Home";
import greenShadow from "./assets/images/greenShadow.svg";
import orangeShadow from "./assets/images/orangeShadow.svg";
import About from "./components/About/About";
import Service from "./components/service/Service";

function App() {
  return (
    <div className="app-container">
      {/* <div className="bg-green-shadow">
        <img src={greenShadow} alt="arcShadow" className="arc-shadow" />
      </div> */}
      {/* <div className="bg-orange-shadow">
        <img src={orangeShadow} alt="arcShadow" className="arc-shadow" />
      </div> */}

      <section className="home" id="home">
        <Home />
      </section>
      <section className="about" id="about">
        <About />
      </section>
      <section className="Service" id="service">
        <Service />
      </section>
    </div>
  );
}

export default App;
