import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { authUser } from "../../features/authReducer";

const Dashboard = () => {
  const user = useSelector(authUser);

  return (
    <div>
      {user.isAuthenticated ? (
        <h1>Welcome to dashboard</h1>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Dashboard;
