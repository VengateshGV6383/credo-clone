import React from "react";
import { useFormik } from "formik";
const UserCreation = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailid: "",
      mobileNumber: "",
      password: "",
      cnfPassword: "",
    },
    onSubmit: (values) => {},
  });

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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
            </div>
            <div className="col col-6  col-md-4">
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
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
                name="emailid"
                id="emailid"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.emailid}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            <div className="col col-6 col-md-4">
              <input
                type="text"
                className="form-control"
                name="cnfPassword"
                id="cnfPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cnfPassword}
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
                id="mobileNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobileNumber}
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
