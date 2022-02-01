import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { authenticatedUser } from "../../features/authReducer";

const Dashboard = () => {
  const authUser = useSelector(authenticatedUser);

  console.log(authUser);
  return (
    <div>
      {authUser.isAuthenticated ? (
        <h1>Welcome to dashboard</h1>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Dashboard;
