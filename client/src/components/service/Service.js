import React from "react";
import "./service.css";

// import service from "../../assets/images/service.png";

const Service = () => {
  return (
    <div className="service-container">
      <div className="container">
        <div className="service-section">
          <div className="row">
            <div className="col-md-6">
              <div className="service-left">
                {/* <img src={service} alt="service-img" /> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-right">
                <div className="title-section">
                  <h2 className="service-title">
                    {" "}
                    <span className="number">03.</span> What We Do
                  </h2>
                </div>
                <div className="service-content">
                  <p className="service-text">
                    <span>We Believe </span>
                    helping make the world a healthier place isn’t just a tag
                    line, it’s our passion. We believe data holds the power to
                    unleash our collective human intelligence. We believe that
                    data can enable new medical breakthroughs, more intelligent
                    health products, better coordination, and truly
                    individualized care. And most importantly, we believe that
                    individuals should be at the center of their own data
                    universe, not the periphery. We believe that:
                  </p>
                  <ul className="features">
                    <li>
                      <i class="bi bi-check2"></i>
                      <span className="feature-text">
                        You should own your data
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2"></i>
                      <span className="feature-text">
                        You should have access to all your data
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2"></i>
                      <span className="feature-text">
                        You should have confidence that your data is safe
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2"></i>
                      <span className="feature-text">
                        You should be able to trust and understand your data
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2"></i>
                      <span className="feature-text">
                        You should be able to control who can access your data
                      </span>
                    </li>
                    <li>
                      <i class="bi bi-check2"></i>
                      <span className="feature-text">
                        You should be able to help society with your data
                      </span>
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
