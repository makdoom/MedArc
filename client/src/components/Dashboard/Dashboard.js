import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { authenticatedUser } from "../../features/authReducer";

const Dashboard = () => {
  const history = useHistory();
  const authUser = useSelector(authenticatedUser);

  // useEffect(() => {
  //   if (localStorage.getItem("authTokken") === null)
  //     return history.push("/login");
  // }, [history]);

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
