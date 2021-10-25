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
        <div class="container">
          <div class="row">
            <div class="col-md-6 bd">
              <div className="testimonial-right">
                <div class="block-title ">
                  <h2>
                    <span>04. </span>
                    Testimonials
                  </h2>
                </div>
                <ul class="slider testimonials-slider">
                  <li class="slide-item">
                    <div class="first">
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
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i class="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="slide-item">
                    <div class="first">
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
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i class="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="slide-item">
                    <div class="first">
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
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i class="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="slide-item">
                    <div class="first">
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
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i class="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="slide-item">
                    <div class="first">
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
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i class="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="slide-item">
                    <div class="first">
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
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="insta">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="whatsapp">
                          <i class="bi bi-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-6 d-flex bd justify-content-center">
              <div class="my-auto">
                <div id="testimonials-slider-pager">
                  <div class="pager-one">
                    <a href="#" class="pager-item active" data-slide-index="0">
                      <img src={user1} />
                    </a>
                    <a href="#" class="pager-item" data-slide-index="1">
                      <img src={user2} alt="Awesome Image" />
                    </a>
                    <a href="#" class="pager-item" data-slide-index="2">
                      <img src={user3} alt="Awesome Image" />
                    </a>
                    <a href="#" class="pager-item" data-slide-index="3">
                      <img src={user4} alt="Awesome Image" />
                    </a>
                    <a href="#" class="pager-item" data-slide-index="4">
                      <img src={user5} alt="Awesome Image" />
                    </a>
                    <a href="#" class="pager-item" data-slide-index="5">
                      <img src={user6} alt="Awesome Image" />
                    </a>
                  </div>
                  <div class="pager-two">
                    <a href="#" class="pager-item active" data-slide-index="0">
                      <img src={user1} />
                    </a>
                    <a href="#" class="pager-item" data-slide-index="1">
                      <img src={user2} alt="Awesome Image" />
                    </a>
                    <a href="#" class="pager-item" data-slide-index="2">
                      <img src={user3} alt="Awesome Image" />
                    </a>
                    <a href="#" class="pager-item" data-slide-index="3">
                      <img src={user4} alt="Awesome Image" />
                    </a>
                    <a href="#" class="pager-item" data-slide-index="4">
                      <img src={user5} alt="Awesome Image" />
                    </a>
                    <a href="#" class="pager-item" data-slide-index="5">
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
