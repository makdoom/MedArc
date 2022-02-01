import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { patientSchema } from "../../validation/PatientValidation";
import { Link } from "react-router-dom";
import { patientLogin } from "../../../controllers/loginController";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import {
  authUser,
  setAuthUser,
  setPasswordChanged,
} from "../../../features/authReducer";

const Login = () => {
  const [userType, setUserType] = useState("Patient");
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState({});
  const [loginObj, setLoginObj] = useState({});

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(authUser);

  // Floating marker
  const handleUserType = (e) => {
    e.preventDefault();
    setUserType(e.target.classList.value);
    let marker = document.querySelector(".l-marker");
    marker.style.left = e.target.offsetLeft + "px";
    marker.style.width = e.target.offsetWidth + "px";
  };

  // Hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(patientSchema.login),
  });

  // if localstorage has autToken redirect to dashboard
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/dashboard");
    }
  }, [history]);

  //Submit handler
  const submitHandler = async () => {
    console.log(loginObj);
    // Set loading to true
    setLoading(true);

    // creating user object
    const patientData = {
      userType,
      ...loginObj,
    };
    console.log(patientData);
    // API request
    const data = await patientLogin(patientData);

    // Setting server side errors
    if (!data.success) {
      setLoading(false);
      return setServerError(data.error);
    }

    if (data.success) dispatch(setAuthUser(true));

    setLoading(false);
    // redirect to dashboard
    history.push("/dashboard");
  };

  // clearing the password changed message
  setTimeout(() => {
    dispatch(setPasswordChanged(""));
  }, 5000);

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
            <div className="form-header">
              {user.passwordChanged && (
                <div className="alert alert-success" role="alert">
                  <span>{user.passwordChanged}</span>
                </div>
              )}
              <div className="header-top">
                <h3>{userType} Login</h3>
                <p className="new-acc-sec">
                  Don't Have an Account ?{" "}
                  <Link to="/register">
                    <span>Create Account </span>
                  </Link>
                  {/* <span onClick={() => history.push("/register")}>
                
              </span> */}
                </p>
              </div>
              <div className="user-type">
                <div className="l-marker"></div>
                <button
                  className={`${
                    userType === "Patient" ? "Patient active" : "Patient"
                  }`}
                  onClick={handleUserType}
                >
                  Patient
                </button>
                <button
                  className={`${
                    userType === "Doctor" ? "Doctor active" : "Doctor"
                  }`}
                  onClick={handleUserType}
                >
                  Doctor
                </button>
              </div>
            </div>
            <div className="form-body">
              <div className="form-group">
                <label className="input-label" htmlFor="email">
                  {userType} Email
                </label>
                <input
                  className={`form-control ${
                    (errors.email || serverError.email) && "is-invalid"
                  }`}
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", { required: true })}
                  onChange={(e) =>
                    setLoginObj({
                      ...loginObj,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <p className="invalid-feedback">
                  {errors.email?.message || serverError.email}
                </p>
              </div>
              <div className="form-group">
                <div className="forgot-sec">
                  <label className="input-label" htmlFor="password">
                    Password
                  </label>
                  <Link to="/forgot-password">
                    <span className="forgot__password">Forgot Password ?</span>
                  </Link>
                </div>
                <input
                  className={`form-control ${
                    (errors.password || serverError.password) && "is-invalid"
                  }`}
                  type="password"
                  id="password"
                  name="password"
                  {...register("password", { required: true })}
                  onChange={(e) =>
                    setLoginObj({
                      ...loginObj,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <p className="invalid-feedback">
                  {errors.password?.message || serverError.password}
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
                Login
              </button>
              <button type="button" className="google-btn">
                <span className="svg-icon svg-icon-md">
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
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
