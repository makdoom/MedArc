import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container">
        <div className="contact-section">
          <div className="contact-info">
            <div className="info-sec">
              <h2>Get in Touch</h2>
              <ul className="c-info">
                <li>
                  <span className="c-icon">
                    <i class="bi bi-geo-alt"></i>
                  </span>
                  <span className="c-text">
                    58, Meadowbrook Road, Los Angeles, CA 90015
                  </span>
                </li>
                <li>
                  <span className="c-icon">
                    <i class="bi bi-envelope"></i>
                  </span>
                  <span className="c-text">info@medarc.com</span>
                </li>
                <li>
                  <span className="c-icon">
                    <i class="fa-brands fa-whatsapp"></i>
                  </span>
                  <span className="c-text">855-785-7415</span>
                </li>
              </ul>
            </div>
            <ul className="sci">
              <li>
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-pinterest-p"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-form"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
