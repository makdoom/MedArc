import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    // <>{isAuthenticated && <Component />}</>
    <Route
      {...rest}
      render={
        (props) => {
          if (auth) {
            return <Component {...props} />;
          } else {
            <Redirect to="/dashboard" />;
          }
        }
        // localStorage.getItem("authToken") ? (
        //   <Component />
        // ) : (
        //   <Redirect to="/login" />
        // )
      }
    />
  );
};

export default ProtectedRoute;
