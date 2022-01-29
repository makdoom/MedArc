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

const store = configureStore({
  reducer: {
    patient: patientReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
