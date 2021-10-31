import React, { useState } from "react";

import "./login.css";

export default function Login() {
  const [userType, setUserType] = useState("Doctor");
  const handleUserType = (e) => {
    setUserType(e.target.classList.value);
    let marker = document.querySelector(".l-marker");
    marker.style.left = e.target.offsetLeft + "px";
    marker.style.width = e.target.offsetWidth + "px";
  };

  return (
    <div className="">
      <div className="login-container">
        <div className="login-left">
          <div className="left-header">
            <div className="logo-box">
              <svg
                width="161"
                height="160"
                viewBox="0 0 161 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M160.937 159.02L83.5362 0.156926L-0.000106329 159.894C16.6423 141.463 47.3805 129.345 82.3762 129.843C115.355 130.313 144.235 141.874 160.937 159.02Z"
                  fill="url(#paint0_linear_190:19)"
                  fillOpacity="0.82"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_190:19"
                    x1="81.5268"
                    y1="48.0777"
                    x2="80.4458"
                    y2="161.04"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7F4BD2" />
                    <stop offset="1" stopColor="#1CA7EC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-box">
              <h3 className="logo-text">Welcome to MedArc</h3>
              <p className="text-dark-50">
                Blockchain Based Online Medical Archieve
              </p>
            </div>
          </div>
        </div>
        <div className="login-right">
          <div className="form-container">
            <form>
              <div className="form-header">
                <div className="header-top">
                  <h3>{userType} Login</h3>
                  <p className="new-acc-sec">
                    Don't Have an Account ? <a href="/">Create Account</a>
                  </p>
                </div>
                <div className="user-type">
                  <div className="l-marker"></div>
                  <a
                    href="#"
                    className={`${
                      userType === "Doctor" ? "Doctor active" : "Doctor"
                    }`}
                    onClick={handleUserType}
                  >
                    Doctor
                  </a>
                  <a
                    href="#"
                    className={`${
                      userType === "Patient" ? "Patient active" : "Patient"
                    }`}
                    onClick={handleUserType}
                  >
                    Patient
                  </a>
                </div>
              </div>
              <div className="form-body">
                <div className="form-group">
                  <label className="input-label" htmlFor="email">
                    Your Email
                  </label>
                  <input className="form-control" type="email" id="email" />
                </div>
                <div className="form-group">
                  <div className="forgot-sec">
                    <label className="input-label" htmlFor="password">
                      Your Password
                    </label>

                    <a href="#" class="">
                      Forgot Password ?
                    </a>
                  </div>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                  />
                </div>
              </div>
              <div className="form-footer">
                <button type="submit" class="submit-btn">
                  Login
                </button>
                <button type="button" class="google-btn">
                  <span class="svg-icon svg-icon-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                        fill="#34A853"
                      />
                      <path
                        d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
                        fill="#EB4335"
                      />
                    </svg>
                  </span>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
          {/* <div class="login-form">
           
              <div class="pb-lg-0 pb-5">
                <button
                  type="submit"
                  id="kt_login_singin_form_submit_button"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  class="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg"
                >
                  <span class="svg-icon svg-icon-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                        fill="#34A853"
                      />
                      <path
                        d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
                        fill="#EB4335"
                      />
                    </svg>
                  </span>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}
