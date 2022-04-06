import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthUser } from "../../features/authReducer";
import "./patientDashboard.css";

const PatientDashboard = () => {
  const [recordsArray, setrecordsArray] = useState([
    {
      name: "Makdoom Shaikh",
      email: "makshaikh99@gmail.com",
      gender: "male",
      age: "20",
      complaint: "fever",
      duration: "10 days",
      treatmentDate: "2021-01-02",
      hash: "0x1e00848cec8676251c8d3bc1cff03a42f4032b3d",
      prescription: "paracetamol",
    },
    {
      name: "Makdoom Shaikh",
      email: "makshaikh99@gmail.com",
      gender: "male",
      age: "21",
      complaint: "asthama",
      duration: "6 months",
      treatmentDate: "2020-04-02",
      hash: "0x1e00848cec8676251c8d3bc1cff03a42f4032b3d",
      prescription: "Bronchodilator",
    },
    {
      name: "Makdoom Shaikh",
      email: "makshaikh99@gmail.com",
      gender: "male",
      age: "20",
      complaint: "fever",
      duration: "10 days",
      treatmentDate: "2020-07-02",
      hash: "0x1e00848cec8676251c8d3bc1cff03a42f4032b3d",
      prescription: "paracetamol",
    },
    {
      name: "Makdoom Shaikh",
      email: "makshaikh99@gmail.com",
      gender: "male",
      age: "20",
      complaint: "Cold / Cough",
      duration: "10 days",
      treatmentDate: "2022-04-07",
      hash: "0x1e00848cec8676251c8d3bc1cff03a42f4032b3d",
      prescription: "cough medicine",
    },
  ]);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.setItem("authToken", "");
    dispatch(setAuthUser(false));
  };

  return (
    <div className="p-container">
      <div className="profile-container">
        <div className="left-box">
          <div className="profile-box">
            <img
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
              alt=""
            />
          </div>
          <div className="profile-content">
            <h3>Makdoom Shaikh</h3>
            <p>Mobile: 7506874855</p>
            {/* <Link to="/dashboard/profile">View Profile</Link> */}
            <button className="btn btn-primary" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
        <div className="right-box">
          <div className="info-box p-box">
            <h6>Info</h6>
            <p>Age: 21</p>
            <p>DOB: April 4, 2001</p>
            <p>Height: 150cm</p>
          </div>
          <div className="address-box p-box">
            <h6>Address</h6>
            <p>
              1st Block 1st Cross <br /> Rammurthy nagar, <br />
              Bangalore-560016
            </p>
          </div>
          {/* <div className="allergies-box p-box">
            <h6>Allergies</h6>
            <p>Pencillin</p>
          </div> */}
          <div className="active-issue-box p-box">
            <h6>Active Issues</h6>
            <p>{recordsArray[recordsArray.length - 1].complaint}</p>
          </div>
          <div className="medical-problem-box p-box">
            <h6>Medical Problems</h6>
            <p>{recordsArray[recordsArray.length - 1].complaint}</p>
          </div>
        </div>
      </div>
      <div className="records-container">
        <div class="card card-custom">
          <div class="card-header flex-wrap border-0 pt-6 pb-0">
            <div class="card-title">
              <h3 class="card-label">
                Patient Records
                <span class="text-muted pt-2 font-size-sm d-block">
                  Patient Medical Records
                </span>
              </h3>
            </div>
            <div class="card-toolbar">
              <a href="#" class="btn btn-primary font-weight-bolder">
                <span class="svg-icon svg-icon-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <rect x="0" y="0" width="24" height="24" />
                      <circle fill="#000000" cx="9" cy="15" r="6" />
                      <path
                        d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                </span>
                Upload Report
              </a>
            </div>
          </div>
          <div class="card-body">
            <div>
              <table className="table table-hover rounded">
                <thead>
                  <tr>
                    <th scope="col">Hash</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Complaint</th>
                    <th scope="col">duration</th>
                    <th scope="col">Prescription</th>
                    <th scope="col">Upload Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recordsArray.map((record, index) => (
                    <tr>
                      <td>{record.hash}</td>
                      <td>{record.name}</td>
                      <td>{record.email}</td>
                      <td>{record.complaint}</td>
                      <td>{record.duration}</td>
                      <td>{record.prescription}</td>
                      <td>
                        <span class="label label-inline label-light-primary font-weight-bold">
                          {record.treatmentDate}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
