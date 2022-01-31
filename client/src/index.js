import React from "react";
import ReactDOM from "react-dom";
import "./theme/css/StyleBundle.css";
// import './theme/css/PluginBundle.css'
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import patientReducer from "./features/patientReducer";
import authReducer from "./features/authReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
  },
});

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  // </React.StrictMode>,
  document.getElementById("root")
);
