import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../../features/authReducer";

const Dashboard = () => {
  const isAuth = useSelector(isAuthenticated);
  console.log(isAuth.isAuthenticated);
  return (
    <div>
      {isAuth.isAuthenticated ? (
        <h1>Welcome to dashboard</h1>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Dashboard;
