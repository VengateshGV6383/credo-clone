import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
const UserCreation = () => {
  const [errmsg, showErrMsg] = useState(false);
  const validate = (values: {
    firstName: string;
    lastName: string;
    mobileNumber: string;
    emailid: string;
    password: string;
    cnfPassword: string;
  }) => {
    const errors: any = {};
    if (!values.firstName) errors.firstName = "Required";
    else if (values.firstName.length > 25)
      errors.firstName = "Only 25 characters are allowed";
    if (!values.lastName) errors.lastName = "Required";
    else if (values.lastName.length > 25)
      errors.firstName = "Only 25 characters are allowed";
    if (!values.emailid) errors.emailid = "Required";
    if (!values.password) errors.password = "Required";
    if (
      !values.password.match("([A-Z])") ||
      !values.password.match("([0-9])") ||
      !values.password.match("([a-z])") ||
      !values.password.match("([!|@|#|$|%|^|&|*|_]){1,}")
    )
      errors.password = "Enter a valid password";
    if (!values.cnfPassword) errors.cnfPassword = "Retype your password";
    if (values.cnfPassword !== values.password)
      errors.cnfPassword = "Password does not matched";
    if (!values.mobileNumber) errors.mobileNumber = "Required";

    if (values.mobileNumber.length < 10)
      errors.mobileNumber = "Enter a valid mobile number";
    if (
      !values.mobileNumber.match("[0-9]{10}") ||
      values.mobileNumber.length > 10
    )
      errors.mobileNumber = "Enter a valid mobile number";

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailid: "",
      mobileNumber: "",
      password: "",
      cnfPassword: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      console.log("Hi " + values.firstName);
    },
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
          className="card-body  justify-content-center align-items-center m-1 "
          style={{
            fontFamily: "Poppins",
          }}
        >
          <div className="card-title m-1">Credo Member Registeration</div>

          <form
            className="form-group needs-validation"
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <div className="row row-cols-12 m-1 p-1">
              <div className="col col-6 col-md-4">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
              </div>
              <div className="col col-6 col-md-4">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
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
                  required
                />
                {formik.touched.firstName &&
                formik.errors.firstName &&
                errmsg ? (
                  <div className="ui pointing red basic label">
                    {formik.errors.firstName}
                  </div>
                ) : null}
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
                  required
                />
                {formik.touched.lastName && formik.errors.lastName && errmsg ? (
                  <div className="ui pointing red basic label">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row row-cols-12 m-1 p-1">
              <div className="col col-6 col-md-4">
                <label htmlFor="eamilid" className="form-label">
                  Email ID
                </label>
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
                  required
                  value={formik.values.emailid}
                />
                {formik.touched.emailid && formik.errors.emailid && errmsg ? (
                  <div className="ui pointing red basic label">
                    {formik.errors.emailid}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row row-cols-12 m-1 p-1">
              <div className="col col-6 col-md-4">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
              </div>
              <div className="col col-6 ">
                <label htmlFor="RePassword" className="form-label">
                  Confirm Password
                </label>
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
                  required
                />
                {formik.touched.password && formik.errors.password && errmsg ? (
                  <div className="ui pointing red basic label">
                    {formik.errors.password}
                  </div>
                ) : null}
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
                  required
                />
                {formik.touched.cnfPassword &&
                formik.errors.cnfPassword &&
                errmsg ? (
                  <div className="ui pointing red basic label">
                    {formik.errors.cnfPassword}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row row-cols-12 m-1 p-1">
              <div className="col col-12 col-md-4">
                <label className="form-label" htmlFor="mobileNumber">
                  Phone Number
                </label>
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
                  required
                />

                {formik.touched.mobileNumber &&
                formik.errors.mobileNumber &&
                errmsg ? (
                  <div className="ui pointing red basic label">
                    {formik.errors.mobileNumber}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row row-cols-12 m-1 p-1">
              <div className="col cols-12 col-md-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => showErrMsg(true)}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserCreation;
