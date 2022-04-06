import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="info-container">
      <div className="info-card">
        <div className="info-upper">
          <div className="pro-box">
            <img
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
              alt=""
            />
          </div>
          <h3>Makdoom Shaikh</h3>
        </div>

        <div className="info-lower">
          <form>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      First Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="form-group">
                      <label for="exampleInputPassword1">
                        Mobile No: <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="exampleSelect1">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <select className="form-control" id="exampleSelect1">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      Date of Birth: <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label for="exampleTextarea">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Address 1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label for="exampleTextarea">
                      City <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label for="exampleTextarea">
                      State <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label for="exampleTextarea">
                      Pincode <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Pincode"
                    />
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <button type="reset" className="btn btn-primary mr-2">
                  Submit
                </button>
                <button type="reset" className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
