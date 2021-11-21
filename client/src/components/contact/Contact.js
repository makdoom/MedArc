import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container">
        <div className="contact-top">
          <h2 className="contact-title">
            {" "}
            <span className="number">05.</span> Get In Touch
          </h2>
          <p>
            We're here to help and answer any question you might have <br /> We
            look forward to hearing from you 😊{" "}
          </p>
        </div>
        <div className="contact-section">
          <div className="contact-info">
            <div className="info-sec">
              <h2>Contact Info</h2>
              <ul className="c-info">
                <li>
                  <span className="c-icon">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                  <span className="c-text">
                    58, Meadowbrook Road, Los Angeles, CA 90015
                  </span>
                </li>
                <li>
                  <span className="c-icon">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <span className="c-text">info@medarc.com</span>
                </li>
                <li>
                  <span className="c-icon">
                    <i className="fa-brands fa-whatsapp"></i>
                  </span>
                  <span className="c-text">855-785-7415</span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li>
                <a href="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <div className="form-box">
              <div className="form">
                <form>
                  <div className="card-body">
                    <h2>Send a Message</h2>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-1">
                          <label htmlFor="exampleTextarea">Message</label>
                          <textarea
                            className="form-control"
                            id="exampleTextarea"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      type="reset"
                      className="btn btn-primary mr-2 submit"
                    >
                      Submit
                    </button>
                    <button type="reset" className="btn btn-secondary reset">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
