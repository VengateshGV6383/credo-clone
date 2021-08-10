import React from "react";
const UserCreation = () => {
  return (
    <div
      className="container-fluid align-self-center "
      style={{
        height: "calc(100% - 20%)",
        overflow: "auto",
        width: "calc(100% - 15%)",
      }}
    >
      <div className="card">
        <div
          className="card-body form-group  justify-content-center align-items-center m-1"
          style={{
            fontFamily: "Poppins",
          }}
        >
          <div className="card-title m-1">Credo Member Registeration</div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6 col-md-4">
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="col col-6 col-md-4">
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6 col-md-4">
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="firstName"
              />
            </div>
            <div className="col col-6  col-md-4">
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
              />
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6 col-md-4">
              <label htmlFor="eamilid">Email ID</label>
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-12 col-md-4">
              <input
                type="email"
                name="email"
                id="emailid"
                className="form-control"
              />
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6 col-md-4">
              <label htmlFor="Password">Password</label>
            </div>
            <div className="col col-6 ">
              <label htmlFor="RePassword">Confirm Password</label>
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6 col-md-4">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
              />
            </div>
            <div className="col col-6 col-md-4">
              <input
                type="text"
                className="form-control"
                name="cnfPassword"
                id="cnfPassword"
              />
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-12 col-md-4">
              <label>Phno</label>
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-12 col-md-4">
              <input
                type="tel"
                className="form-control"
                name="mobileNumber"
                id="mobilenumber"
              />
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col cols-12 col-md-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCreation;
