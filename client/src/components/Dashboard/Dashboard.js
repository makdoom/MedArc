import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { authUser } from "../../features/authReducer";
import DoctorDashboard from "../Doctor/DoctorDashboard";
import PatientDashboard from "../Patient/PatientDashboard";

const Dashboard = () => {
  const user = useSelector(authUser);
  // console.log(user.userType);
  return (
    <div>
      {user.isAuthenticated ? (
        user.userType === "Patient" ? (
          <PatientDashboard />
        ) : (
          <DoctorDashboard />
        )
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Dashboard;
