import React from "react";
const UserCreation = () => {
  return (
    <div
      className="container-fluid align-self-center "
      style={{ height: "calc(100% - 20%)", overflow: "auto" }}
    >
      <div className="card">
        <div
          className="card-body form-group  justify-content-center align-items-center m-2"
          style={{
            flexDirection: "column",
            width: "50rem",
            flexWrap: "wrap",
            fontFamily: "Poppins",
          }}
        >
          <div className="card-title" style={{ fontFamily: "Poppins" }}>
            Credo Member Registeration
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6 ">
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="col col-6 ">
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6 ">
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="firstName"
              />
            </div>
            <div className="col col-6 ">
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
              />
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6">
              <label htmlFor="eamilid">Email ID</label>
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6 ">
              <input
                type="email"
                name="email"
                id="emailid"
                className="form-control"
              />
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6 ">
              <label htmlFor="Password">Password</label>
            </div>
            <div className="col col-6 ">
              <label htmlFor="RePassword">Confirm Password</label>
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6 ">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
              />
            </div>
            <div className="col col-6 ">
              <input
                type="text"
                className="form-control"
                name="cnfPassword"
                id="cnfPassword"
              />
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-12 ">
              <label>Phno</label>
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-6 ">
              <input
                type="tel"
                className="form-control"
                name="mobileNumber"
                id="mobilenumber"
              />
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col cols-12 ">
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
