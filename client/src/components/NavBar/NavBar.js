import React from "react";

const NavBar = () => {
  return (
    <div className="container">
      <ul class="nav justify-content-around">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About Us
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            MedArc
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            Service
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
