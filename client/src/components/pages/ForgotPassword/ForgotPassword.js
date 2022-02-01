import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../../validation/common";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { forgotPassword } from "../../../controllers/commonController";

const ForgotPassword = () => {
  const [serverError, setServerError] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  // Hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const submitHandler = async () => {
    // Set loading to true
    setLoading(true);

    // clearing succes message
    setTimeout(() => {
      setSuccessMsg("");
      setServerError({});
    }, 5000);

    // API request
    const data = await forgotPassword(email);

    // Setting server side errors
    if (!data.success) {
      setLoading(false);
      return setServerError(data.error);
    }

    if (data.success) {
      setLoading(false);
      return setSuccessMsg(data.message);
    }

    setLoading(false);
  };

  return (
    <div className="screen-container">
      <div className="screen-left">
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
            <h2 className="logo-text">Welcome to MedArc</h2>
            <p className="text-dark-50">
              Blockchain Based Online Medical Archieve
            </p>
          </div>
        </div>
      </div>
      <div className="screen-right">
        <div className="form-container">
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-body">
              <div className="forgot-password-container">
                <div className="form-header">
                  {successMsg && (
                    <div className="alert alert-success" role="alert">
                      <i className="bi bi-check2-circle"></i> {successMsg}
                    </div>
                  )}

                  <div className="header-top">
                    <h3>Forgotten Password ?</h3>
                    <p className="new-acc-sec">
                      Enter your email to reset your password
                    </p>
                  </div>
                </div>
                <div className="form-body">
                  <div className="form-group">
                    <label className="input-label" htmlFor="email">
                      Enter Your Email
                    </label>
                    <input
                      className={`form-control ${
                        (errors.email || serverError.email) && "is-invalid"
                      }`}
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      {...register("email", { required: true })}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="invalid-feedback">
                      {errors.email?.message || serverError.email}
                    </p>
                  </div>
                </div>
                <div className="form-footer">
                  <button
                    disabled={loading}
                    type="submit"
                    className={`btn btn-primary spinner-white spinner-right ${
                      loading && "spinner"
                    }`}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="previous-btn"
                    onClick={() => history.push("/login")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
