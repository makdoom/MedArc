import React from "react";
import "./about.css";

import about from "../../assets/images/about.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div className="about-section">
          <div className="row">
            <div className="col-md-6">
              <div className="about-left">
                <div className="title-section">
                  <h2 className="about-title">
                    {" "}
                    <span className="number">02.</span> Who We Are
                  </h2>
                </div>
                <div className="about-content">
                  <p className="about-text">
                    over the last decade, society has witnessed an explosion of
                    health-related technology, from electronic health records to
                    IoT fitness devices to low-cost whole genome sequencing.
                    Currently, data from these sources is largely siloed – with
                    limited or no integration with other data sources. At{" "}
                    <span> MedArc</span>, we believe that the health industry is
                    at a tipping point. Technologies now exist that will break
                    down these silos and enable health data to be connected on a
                    global scale. <br />
                    <br />
                    Healthcare will be predictive, preventative and personal.
                    Healthcare will be accessible to every person, everywhere,
                    regardless of who they are, where they are, . And with each
                    new connection, our collective human intelligence will grow
                    stronger. <br />
                    <br />
                    <span>MedArc</span> was founded with one mission: to enable
                    this next era of health. We believe that each person
                    deserves to live their healthiest, happiest life, and that
                    data will democratize health on a both a global and an
                    individual level.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-right">
                <img src={about} alt="about-img" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
