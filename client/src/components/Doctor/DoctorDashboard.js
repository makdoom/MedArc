import React, { useState } from "react";
import crypto from "crypto";
import { Link } from "react-router-dom";
import "./doctorDashboard.css";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../features/authReducer";

const DoctorDashboard = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const dispatch = useDispatch();
  const [recordsArray, setrecordsArray] = useState([
    {
      name: "Makdoom Shaikh",
      email: "makshaikh99@gmail.com",
      gender: "male",
      age: "20",
      complaint: "fever",
      duration: "10 days",
      treatmentDate: "2020-04-02",
      hash: "0x1e00848cec8676251c8d3bc1cff03a42f4032b3d",
      prescription: "paracetamol",
    },
    {
      name: "Rahul",
      email: "rahul@gmail.com",
      gender: "male",
      age: "21",
      complaint: "asthama",
      duration: "1 months",
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
      treatmentDate: "2020-04-02",
      hash: "0x1e00848cec8676251c8d3bc1cff03a42f4032b3d",
      prescription: "paracetamol",
    },
    {
      name: "Makdoom Shaikh",
      email: "makshaikh99@gmail.com",
      gender: "male",
      age: "20",
      complaint: "cold",
      duration: "10 days",
      treatmentDate: "2020-04-02",
      hash: "0x1e00848cec8676251c8d3bc1cff03a42f4032b3d",
      prescription: "cough medicine",
    },
  ]);
  const [newPatient, setNewPatient] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    complaint: "",
    prescription: "",
    duration: "",
    treatmentDate: "",
  });

  const logout = () => {
    localStorage.setItem("authToken", "");
    dispatch(setAuthUser(false));
  };
  const submitHandler = () => {
    const newRecords = {
      ...newPatient,
      hash: crypto.randomBytes(20).toString("hex"),
    };
    setrecordsArray([...recordsArray, newRecords]);
    setIsModalShow(!isModalShow);
    setNewPatient({
      name: "",
      email: "",
      gender: "",
      age: "",
      complaint: "",
      duration: "",
      treatmentDate: "",
    });
  };

  return (
    <>
      {isModalShow && (
        <div className="modal-box">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add new patient</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setIsModalShow(!isModalShow)}
                ></button>
              </div>
              <div class="modal-body">
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-md-6">
                      <div class="form-group">
                        <label>
                          Patient Name <span class="text-danger">*</span>
                        </label>
                        <input
                          onChange={(e) =>
                            setNewPatient({
                              ...newPatient,
                              name: e.target.value,
                            })
                          }
                          type="text"
                          name="name"
                          value={newPatient.name}
                          class="form-control"
                          placeholder="Enter patient name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label>
                          Patient Email <span class="text-danger">*</span>
                        </label>
                        <input
                          onChange={(e) =>
                            setNewPatient({
                              ...newPatient,
                              email: e.target.value,
                            })
                          }
                          type="email"
                          name="email"
                          value={newPatient.email}
                          class="form-control"
                          placeholder="Enter patient name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label>
                          Patient gender <span class="text-danger">*</span>
                        </label>
                        <input
                          onChange={(e) =>
                            setNewPatient({
                              ...newPatient,
                              gender: e.target.value,
                            })
                          }
                          type="text"
                          name="email"
                          value={newPatient.gender}
                          class="form-control"
                          placeholder="Enter gender"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label>
                          Age <span class="text-danger">*</span>
                        </label>
                        <input
                          onChange={(e) =>
                            setNewPatient({
                              ...newPatient,
                              age: e.target.value,
                            })
                          }
                          type="text"
                          name="age"
                          value={newPatient.age}
                          class="form-control"
                          placeholder="Enter Age"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label>
                          Complaint <span class="text-danger">*</span>
                        </label>
                        <input
                          onChange={(e) =>
                            setNewPatient({
                              ...newPatient,
                              complaint: e.target.value,
                            })
                          }
                          type="text"
                          name="complaint"
                          value={newPatient.complaint}
                          class="form-control"
                          placeholder="Enter illness"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label>
                          Duration <span class="text-danger">*</span>
                        </label>
                        <input
                          onChange={(e) =>
                            setNewPatient({
                              ...newPatient,
                              duration: e.target.value,
                            })
                          }
                          type="text"
                          name="duration"
                          value={newPatient.duration}
                          class="form-control"
                          placeholder="Enter Duration"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label>
                          Prescription <span class="text-danger">*</span>
                        </label>
                        <input
                          onChange={(e) =>
                            setNewPatient({
                              ...newPatient,
                              prescription: e.target.value,
                            })
                          }
                          type="text"
                          name="prescription"
                          value={newPatient.prescription}
                          class="form-control"
                          placeholder="Enter prescription"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <label>
                          Date of treatment <span class="text-danger">*</span>
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          name="treatmentDate"
                          onChange={(e) =>
                            setNewPatient({
                              ...newPatient,
                              treatmentDate: e.target.value,
                            })
                          }
                          value={newPatient.treatmentDate}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setIsModalShow(!isModalShow)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  onClick={submitHandler}
                  class="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="doctor-dashboard">
        <div className="profile-container">
          <div className="left-box">
            <div className="profile-box">
              <img
                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                alt=""
              />
            </div>
            <div className="profile-content">
              <h3>Dr. Makdoom Shaikh</h3>
              <span>Medical Oncologist, Mumbai, India</span>
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
              <p>Qualification: Medical Oncologist </p>
            </div>
            <div className="address-box p-box">
              <h6>Address</h6>
              <p>
                1st Block 1st Cross <br /> Rammurthy nagar, <br />
                Bangalore-560016
              </p>
            </div>
          </div>
        </div>

        <div className="stats-container">
          <div className="stats-box box-1">
            <div className="title">
              <h3>3</h3>
              <p>Total Patients</p>
            </div>
            <span>Last Update</span>
            <p>1 day ago</p>
          </div>
          <div className="stats-box box-2">
            <div className="title">
              <h3>{recordsArray.length}</h3>
              <p>Total Records</p>
            </div>
            <span>Last Update</span>
            <p>1 days ago</p>
          </div>
          <div className="stats-box box-3">
            <div className="title">
              <h3>3</h3>
              <p>Active Patients</p>
            </div>
            <span>Last Update</span>
            <p>1 days ago</p>
          </div>
          <div className="stats-box box-4">
            <div className="title">
              <h3>0</h3>
              <p>Inactive Patient</p>
            </div>
            <span>Last Update</span>
            <p>1 days ago</p>
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
                <button
                  class="btn btn-primary font-weight-bolder"
                  onClick={() => setIsModalShow(!isModalShow)}
                >
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
                  New Record
                </button>
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
    </>
  );
};

export default DoctorDashboard;
