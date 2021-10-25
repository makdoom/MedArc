import React from "react";
import "./testimonial.css";

import quoteOpen from "../../assets/svg/quote-open.svg";
import quoteClose from "../../assets/svg/quote-close.svg";

import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";
import user4 from "../../assets/images/user4.jpg";
import user5 from "../../assets/images/user5.jpg";
import user6 from "../../assets/images/user6.jpg";

import waveTop from '../../assets/svg/wave.svg'

const Testimonial = () => {
  return (
    <div className="testimonial-main-container">
        <img className="wave-top" src={waveTop} alt="" />
        <img className="wave-bottom" src={waveTop} alt="" />
      <section className="one">
        <div className="container">
          <div className="row">
            <div className="col-md-6 bd">
              <div className="testimonial-right">
                <div className="block-title ">
                  <h2>
                    <span>04. </span>
                    Testimonials
                  </h2>
                </div>
                <ul className="slider testimonials-slider">
                  <li className="slide-item">
                    <div className="first">
                      <p>
                        <img className="quote" src={quoteOpen} alt="" />
                        &nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sapiente nihil quidem iusto ut odit voluptatum,
                        cumque voluptates alias ex sit quos doloribus et aperiam
                        ratione, pariatur esse officia assumenda iste! Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit.
                        Libero, quia exercitationem repellat vel earum provident
                        sunt amet voluptatem corporis quos! <img className="quote" src={quoteClose} alt="" />
                      </p>
                      <h3>Delila Rayam</h3>
                      <div className="social-links">
                        <a href="#" className="fb">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i className="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="slide-item">
                    <div className="first">
                      <p><img className="quote" src={quoteOpen} alt="" />
                        &nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sapiente nihil quidem iusto ut odit voluptatum,
                        cumque voluptates alias ex sit quos doloribus et aperiam
                        ratione, pariatur esse officia assumenda iste! Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit.
                        Libero, quia exercitationem repellat vel earum provident
                        sunt amet voluptatem corporis quos! <img className="quote" src={quoteClose} alt="" />
                      </p>
                      <h3>Terrilyn Werme</h3>
                      <div className="social-links">
                        <a href="#" className="fb">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i className="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="slide-item">
                    <div className="first">
                        <p><img className="quote" src={quoteOpen} alt="" />
                        &nbsp;
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sapiente nihil quidem iusto ut odit voluptatum,
                        cumque voluptates alias ex sit quos doloribus et aperiam
                        ratione, pariatur esse officia assumenda iste! Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit.
                        Libero, quia exercitationem repellat vel earum provident
                        sunt amet voluptatem corporis quos! <img className="quote" src={quoteClose} alt="" />
                      </p>
                      <h3>Kyle Demayo</h3>
                      <div className="social-links">
                        <a href="#" className="fb">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i className="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="slide-item">
                    <div className="first">
                      <p><img className="quote" src={quoteOpen} alt="" />
                        &nbsp;
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sapiente nihil quidem iusto ut odit voluptatum,
                        cumque voluptates alias ex sit quos doloribus et aperiam
                        ratione, pariatur esse officia assumenda iste! Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit.
                        Libero, quia exercitationem repellat vel earum provident
                        sunt amet voluptatem corporis quos! <img className="quote" src={quoteClose} alt="" />
                      </p>
                      <h3>Minta Hadad</h3>
                      <div className="social-links">
                        <a href="#" className="fb">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i className="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="slide-item">
                    <div className="first">
                      <p><img className="quote" src={quoteOpen} alt="" />
                        &nbsp;
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sapiente nihil quidem iusto ut odit voluptatum,
                        cumque voluptates alias ex sit quos doloribus et aperiam
                        ratione, pariatur esse officia assumenda iste! Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit.
                        Libero, quia exercitationem repellat vel earum provident
                        sunt amet voluptatem corporis quos! <img className="quote" src={quoteClose} alt="" />
                      </p>
                      <h3>Sherman Cibrian</h3>
                      <div className="social-links">
                        <a href="#" className="fb">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i className="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="slide-item">
                    <div className="first">
                      <p><img className="quote" src={quoteOpen} alt="" />
                        &nbsp;
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sapiente nihil quidem iusto ut odit voluptatum,
                        cumque voluptates alias ex sit quos doloribus et aperiam
                        ratione, pariatur esse officia assumenda iste! Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit.
                        Libero, quia exercitationem repellat vel earum provident
                        sunt amet voluptatem corporis quos! <img className="quote" src={quoteClose} alt="" />
                      </p>
                      <h3>Adrianne Hagans</h3>
                      <div className="social-links">
                        <a href="#" className="fb">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i className="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 d-flex bd justify-content-center">
              <div className="my-auto">
                <div id="testimonials-slider-pager">
                  <div className="pager-one">
                    <a href="#" className="pager-item active" data-slide-index="0">
                      <img src={user1} />
                    </a>
                    <a href="#" className="pager-item" data-slide-index="1">
                      <img src={user2} alt="Awesome Image" />
                    </a>
                    <a href="#" className="pager-item" data-slide-index="2">
                      <img src={user3} alt="Awesome Image" />
                    </a>
                    <a href="#" className="pager-item" data-slide-index="3">
                      <img src={user4} alt="Awesome Image" />
                    </a>
                    <a href="#" className="pager-item" data-slide-index="4">
                      <img src={user5} alt="Awesome Image" />
                    </a>
                    <a href="#" className="pager-item" data-slide-index="5">
                      <img src={user6} alt="Awesome Image" />
                    </a>
                  </div>
                  <div className="pager-two">
                    <a href="#" className="pager-item active" data-slide-index="0">
                      <img src={user1} />
                    </a>
                    <a href="#" className="pager-item" data-slide-index="1">
                      <img src={user2} alt="Awesome Image" />
                    </a>
                    <a href="#" className="pager-item" data-slide-index="2">
                      <img src={user3} alt="Awesome Image" />
                    </a>
                    <a href="#" className="pager-item" data-slide-index="3">
                      <img src={user4} alt="Awesome Image" />
                    </a>
                    <a href="#" className="pager-item" data-slide-index="4">
                      <img src={user5} alt="Awesome Image" />
                    </a>
                    <a href="#" className="pager-item" data-slide-index="5">
                      <img src={user6} alt="Awesome Image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
