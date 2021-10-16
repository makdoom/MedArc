import React from "react";
import "./service.css";
// import service from "../../assets/images/about.png";

const Service = () => {
  return (
    <div className="service-container">
      <div className="container">
        <div className="service-section">
          <div className="title-section">
            <h2 className="service-title">What We Do</h2>
          </div>

          <div className="content-section">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="service-side-img">
                  {/* <img src={about} alt="service-img" /  > */}
                  {/* <img src={doc} alt="service-img" /> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-content">
                  <h3>WE BELIEVE</h3>
                  <p className="service-text">
                    Helping make the world a healthier place isn’t just a tag
                    line, it’s our passion. We believe data holds the power to
                    unleash our collective human intelligence. We believe that
                    data can enable new medical breakthroughs, more intelligent
                    health products, better coordination, and truly
                    individualized care. And most importantly, we believe that
                    individuals should be at the center of their own data
                    universe, not the periphery. We believe that:
                  </p>
                  <ul className="believe-list">
                    <li className="believe-link">
                      <div className="link-box">
                        <span className="link-number">1</span>
                        <p className="link-text">You should own your data</p>
                      </div>
                    </li>

                    <li className="believe-link">
                      <div className="link-box">
                        <span className="link-number">2</span>
                        <p className="link-text">
                          You should have access to all your data
                        </p>
                      </div>
                    </li>
                    <li className="believe-link">
                      <div className="link-box">
                        <span className="link-number">3</span>
                        <p className="link-text">
                          You should have confidence that your data is safe
                        </p>
                      </div>
                    </li>
                    <li className="believe-link">
                      <div className="link-box">
                        <span className="link-number">4</span>
                        <p className="link-text">
                          You should be able to trust and understand your data
                        </p>
                      </div>
                    </li>
                    <li className="believe-link">
                      <div className="link-box">
                        <span className="link-number">5</span>
                        <p className="link-text">
                          You should be able to control who can access your data
                        </p>
                      </div>
                    </li>
                    <li className="believe-link">
                      <div className="link-box">
                        <span className="link-number">6</span>
                        <p className="link-text">
                          You should be able to help society with your data
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
