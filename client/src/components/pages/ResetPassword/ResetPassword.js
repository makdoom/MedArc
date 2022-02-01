import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { resetPasswordSchema } from "../../validation/common";
import { resetPassword } from "../../../controllers/commonController";
import { useDispatch } from "react-redux";
import { setPasswordChanged } from "../../../features/authReducer";

const ResetPassword = () => {
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [newCred, setNewCred] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const { resetToken } = useParams();

  // Hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const submitHandler = async () => {
    setTimeout(() => {
      setServerError("");
    }, 5000);

    const data = await resetPassword(newCred.newPassword, resetToken);

    // Setting server side errors
    if (!data.success) {
      setLoading(false);
      setNewCred({ newPassword: "", confirmPassword: "" });
      return setServerError(data.message);
    }

    dispatch(
      setPasswordChanged(
        "Your password has been changed successfully, Please login to continue"
      )
    );

    // redirect to dashboard
    history.push("/login");
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
                  {serverError && (
                    <div className="alert alert-danger" role="alert">
                      <i className="flaticon2-warning"></i>
                      <span>{serverError}</span>
                    </div>
                  )}
                  <div className="header-top">
                    <h3>Create New Password</h3>
                    <p className="new-acc-sec">
                      Your new password must be different from previous used
                      passwords
                    </p>
                  </div>
                </div>
                <div className="form-body">
                  <div className="form-group">
                    <div className="forgot-sec">
                      <label className="input-label" htmlFor="newPassword">
                        New Password
                      </label>
                    </div>
                    <input
                      className={`form-control ${
                        errors.newPassword && "is-invalid"
                      }`}
                      type="password"
                      id="newPassword"
                      value={newCred.newPassword}
                      name="newPassword"
                      {...register("newPassword", { required: true })}
                      onChange={(e) =>
                        setNewCred({
                          ...newCred,
                          newPassword: e.target.value,
                        })
                      }
                    />
                    <p className="invalid-feedback">
                      {errors.newPassword?.message}
                    </p>
                  </div>
                  <div className="form-group">
                    <div className="forgot-sec">
                      <label className="input-label" htmlFor="confirmPassword">
                        Confirm Password
                      </label>
                    </div>
                    <input
                      className={`form-control ${
                        errors.confirmPassword && "is-invalid"
                      }`}
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={newCred.confirmPassword}
                      {...register("confirmPassword", { required: true })}
                      onChange={(e) =>
                        setNewCred({
                          ...newCred,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                    <p className="invalid-feedback">
                      {errors.confirmPassword?.message}
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

export default ResetPassword;
