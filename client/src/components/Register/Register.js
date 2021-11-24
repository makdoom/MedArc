import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [userScreen, setUserScreen] = useState("userType");
  const [user, setUser] = useState({
    userType: "",
  });

  console.log(user);

  return (
    <div className="register__container">
      <div className="register__left">
        <div className="register__inner">
          <div className="stepper__container">
            <div className="stepper">
              <div
                className={`stepper__icon ${
                  userScreen === "userType" ||
                  user.userType === "doctor" ||
                  user.userType === "patient"
                    ? "active"
                    : ""
                } `}
              >
                <span>1</span>
              </div>
              <div className="stepper__details">
                <h4 className="title">Registration</h4>
                <p>Register Yourself</p>
              </div>
            </div>
            <div className="stepper">
              <div
                className={`stepper__icon ${
                  userScreen === "details" || user.firstName ? "active" : ""
                } `}
              >
                <span>2</span>
              </div>
              <div className="stepper__details">
                <h4 className="title">Details</h4>
                <p>Personal Details</p>
              </div>
            </div>
            <div className="stepper">
              <div className="stepper__icon">
                <span>3</span>
              </div>
              <div className="stepper__details">
                <h4 className="title">Address</h4>
                <p>Residential Address</p>
              </div>
            </div>
            <div className="stepper">
              <div className="stepper__icon">
                <span>4</span>
              </div>
              <div className="stepper__details">
                <h4 className="title">Complete</h4>
                <p>Submit Form</p>
              </div>
            </div>
          </div>
          <div className="screen__container">
            {/* First Screen */}
            {userScreen === "userType" && (
              <div className="userSelection__screen">
                <div className="userSelection__top">
                  <h2>Create Account</h2>
                  <span>
                    Already have an Account ? <Link to="/login">Login</Link>
                  </span>
                </div>
                <div className="userType__wrapper">
                  <div
                    onClick={() => setUser({ ...user, userType: "doctor" })}
                    className={`user__type ${
                      user.userType === "doctor" ? "doctor" : ""
                    } `}
                  >
                    <i className="icofont-stethoscope"></i>
                    <span>Doctor</span>
                  </div>
                  <div
                    onClick={() => setUser({ ...user, userType: "patient" })}
                    className={`user__type ${
                      user.userType === "patient" ? "patient" : ""
                    } `}
                  >
                    <i className="bi bi-person"></i>
                    <span>Patient</span>
                  </div>
                </div>
                <div className="userFooter__btn single-btn">
                  <button
                    className="next"
                    onClick={() => setUserScreen("details")}
                  >
                    <span>Next</span> <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {/* Second Screen */}
            {userScreen === "details" && (
              <div className="personalDetails__container">
                <div className="form-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input-label" htmlFor="firstName">
                          First Name<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="First Name"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input-label" htmlFor="lastName">
                          Last Name<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Last Name"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input-label" htmlFor="dob">
                          Date of Birth<span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          name="dob"
                          id="dob"
                          min="01-01-1970"
                          max="31-12-2030"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="gender" className="input-label">
                          Gender<span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          name="gender"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
                          }
                        >
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input-label" htmlFor="email">
                          {user.userType === "doctor"
                            ? "Doctor Email"
                            : "Patient Email"}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Email"
                          id="email"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="input-label" htmlFor="mobile">
                          Mobile Number
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="tel"
                          id="mobile"
                          name="mobile"
                          placeholder="+91 "
                          onChange={(e) =>
                            setUser({
                              ...user,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="userFooter__btn">
                    <button className="previous">
                      <i className="bi bi-arrow-left"></i> <span>Previous</span>
                    </button>
                    <button className="next">
                      <span>Next</span> <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="register__right">particles effect goes here</div>
    </div>
  );
};

export default Register;
