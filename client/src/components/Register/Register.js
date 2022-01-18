import React, { useState } from "react";
import { Link } from "react-router-dom";
import { stateList, countryList } from "../../data";
import "./register.css";

const Register = () => {
  // Screen
  const [userScreen, setUserScreen] = useState("userType");

  // UserObj
  const [user, setUser] = useState({
    userType: "",
    details: {},
    addressDetails: {},
  });

  // HandleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserScreen("complete");
    console.log(user);
  };

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
                  userScreen === "details" || user.details.firstName
                    ? "active"
                    : ""
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
              <div
                className={`stepper__icon ${
                  userScreen === "address" || user.addressDetails.pincode
                    ? "active"
                    : ""
                } `}
              >
                <span>3</span>
              </div>
              <div className="stepper__details">
                <h4 className="title">Address</h4>
                <p>Residential Address</p>
              </div>
            </div>
            <div className="stepper">
              <div
                className={`stepper__icon ${
                  userScreen === "complete" ? "active" : ""
                } `}
              >
                <span>4</span>
              </div>
              <div className="stepper__details">
                <h4 className="title">Complete</h4>
                <p>Submit Form</p>
              </div>
            </div>
          </div>

          <form>
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
                  <div className="userSelection__top">
                    <h2>Personal Details</h2>
                  </div>
                  <div className="form-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input-label" htmlFor="firstName">
                            First Name<span className="text-danger">*</span>
                          </label>
                          <input
                            required
                            className="form-control"
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                details: {
                                  ...user.details,
                                  [e.target.name]: e.target.value,
                                },
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
                            required
                            className="form-control"
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                details: {
                                  ...user.details,
                                  [e.target.name]: e.target.value,
                                },
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
                            required
                            className="form-control"
                            type="date"
                            name="dob"
                            id="dob"
                            min="01-01-1970"
                            max="31-12-2030"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                details: {
                                  ...user.details,
                                  [e.target.name]: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="gender" className="input-label">
                            Gender<span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            id="gender"
                            name="gender"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                details: {
                                  ...user.details,
                                  [e.target.name]: e.target.value,
                                },
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
                            required
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Email"
                            id="email"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                details: {
                                  ...user.details,
                                  [e.target.name]: e.target.value,
                                },
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
                            required
                            className="form-control"
                            type="tel"
                            id="mobile"
                            name="mobile"
                            placeholder="+91 "
                            onChange={(e) =>
                              setUser({
                                ...user,
                                details: {
                                  ...user.details,
                                  [e.target.name]: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="userFooter__btn">
                      <button
                        className="previous"
                        onClick={() => setUserScreen("userType")}
                      >
                        <i className="bi bi-arrow-left"></i>{" "}
                        <span>Previous</span>
                      </button>
                      <button
                        className="next"
                        onClick={() => setUserScreen("address")}
                      >
                        <span>Next</span> <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Third Screen */}
              {userScreen === "address" && (
                <div className="address__container">
                  <div className="userSelection__top">
                    <h2>Address Details</h2>
                  </div>
                  <div className="form-body">
                    <div className="row">
                      {user.userType === "doctor" ? (
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="input-label" htmlFor="clinicName">
                              Clinic Name<span className="text-danger">*</span>
                            </label>
                            <input
                              required
                              className="form-control"
                              type="text"
                              name="clinicName"
                              id="clinicName"
                              placeholder="Clinic Name"
                              onChange={(e) =>
                                setUser({
                                  ...user,
                                  addressDetails: {
                                    ...user.addressDetails,
                                    [e.target.name]: e.target.value,
                                  },
                                })
                              }
                            />
                          </div>
                        </div>
                      ) : null}

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input-label" htmlFor="addressLine1">
                            Address Line 1<span className="text-danger">*</span>
                          </label>
                          <input
                            required
                            className="form-control"
                            type="text"
                            name="addressLine1"
                            id="addressLine1"
                            placeholder="Address Line 1"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                addressDetails: {
                                  ...user.addressDetails,
                                  [e.target.name]: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input-label" htmlFor="addressLine2">
                            Address Line 2<span className="text-danger">*</span>
                          </label>
                          <input
                            required
                            className="form-control"
                            type="text"
                            name="addressLine2"
                            id="addressLine2"
                            placeholder="Address Line 2"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                addressDetails: {
                                  ...user.addressDetails,
                                  [e.target.name]: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="city" className="input-label">
                            City<span className="text-danger">*</span>
                          </label>
                          <input
                            required
                            className="form-control"
                            type="text"
                            name="city"
                            id="city"
                            placeholder="City"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                addressDetails: {
                                  ...user.addressDetails,
                                  [e.target.name]: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="state" className="input-label">
                            State<span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            name="state"
                            id="state"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                addressDetails: {
                                  ...user.addressDetails,
                                  [e.target.name]: e.target.value,
                                },
                              })
                            }
                          >
                            {stateList.map((item, index) => (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="country" className="input-label">
                            Country<span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            name="country"
                            id="country"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                addressDetails: {
                                  ...user.addressDetails,
                                  [e.target.name]: e.target.value,
                                },
                              })
                            }
                          >
                            {countryList.map((item, index) => (
                              <option key={index} value={item.name}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="pincode" className="input-label">
                            Pincode<span className="text-danger">*</span>
                          </label>
                          <input
                            required
                            className="form-control"
                            type="text"
                            name="pincode"
                            id="pincode"
                            pattern="[0-9]{6}"
                            maxLength="6"
                            onChange={(e) =>
                              setUser({
                                ...user,
                                addressDetails: {
                                  ...user.addressDetails,
                                  [e.target.name]: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="userFooter__btn">
                      <button
                        className="previous"
                        onClick={() => setUserScreen("details")}
                      >
                        <i className="bi bi-arrow-left"></i>{" "}
                        <span>Previous</span>
                      </button>
                      <button
                        className="next"
                        onClick={() => setUserScreen("complete")}
                      >
                        <span>Next</span> <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* {Fourth screen} */}
              {userScreen === "complete" && (
                <div className="complete__container">
                  <div className="complete__top">
                    <h2>Complete</h2>
                    <span>
                      Complete your registration and become a member ...!
                    </span>
                  </div>

                  <div className="complete__infoBox">
                    <h3 className="complete__infoTitle">Personal Details</h3>
                    <p className="name">
                      {user.details.firstName} {user.details.lastName}
                    </p>
                    <p className="email">{user.details.email}</p>
                    <p className="email">{user.details.mobile}</p>
                  </div>
                  <div className="complete__infoBox">
                    <h3 className="complete__infoTitle">Address Details</h3>
                    {user.userType === "doctor" && (
                      <p>{user.addressDetails.clinicName} </p>
                    )}
                    <p>{user.addressDetails.addressLine1}</p>
                    <p>
                      {user.addressDetails.addressLine2},{" "}
                      {user.addressDetails.city}{" "}
                    </p>
                    <p>
                      {user.addressDetails.state}, {user.addressDetails.country}
                      ,{user.addressDetails.pincode}.
                    </p>
                  </div>
                  <div className="userFooter__btn">
                    <button
                      className="previous"
                      onClick={() => setUserScreen("address")}
                    >
                      <i className="bi bi-arrow-left"></i> <span>Previous</span>
                    </button>
                    <button className="next" onClick={handleSubmit}>
                      <span>Submit</span> <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="register__right">particles effect goes here</div>
    </div>
  );
};

export default Register;
