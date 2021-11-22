import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register__container">
      <div className="register__left">
        <div className="register__inner">
          <div className="stepper__container">
            <div className="stepper">
              <div className="stepper__icon">
                <span>1</span>
              </div>
              <div className="stepper__details">
                <h4 className="title">Account</h4>
                <p>Account Details</p>
              </div>
            </div>
            <div className="stepper">
              <div className="stepper__icon">
                <span>2</span>
              </div>
              <div className="stepper__details">
                <h4 className="title">Address</h4>
                <p>Resedential address</p>
              </div>
            </div>
            <div className="stepper">
              <div className="stepper__icon">
                <span>3</span>
              </div>
              <div className="stepper__details">
                <h4 className="title">Complete</h4>
                <p>Submit form</p>
              </div>
            </div>
          </div>
          <div className="variable__container">
            <div className="variable__top">
              <h2>Create Account</h2>
              <span>
                Already have an Account ? <a href="/">Login</a>
              </span>
            </div>
            <div className="variable__body">
              <div className="form-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input-label" htmlFor="fname">
                        First Name<span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" id="fname" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input-label" htmlFor="lname">
                        Last Name<span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" id="lname" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="input-label" htmlFor="email">
                        Email<span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="email" id="email" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="gender" className="input-label">
                        Gender<span className="text-danger">*</span>
                      </label>
                      <select className="form-control" id="gender">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="input-label" htmlFor="tel">
                    Mobile Number<span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="tel"
                    id="tel"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>
                <div className="form-footer">
                  <button className="next">
                    <span>Next</span> <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="register__right">particles effect goes here</div>
    </div>
  );
};

export default Register;
