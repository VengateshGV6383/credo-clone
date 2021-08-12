import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { useHistory } from "react-router-dom";

const UserCreation = () => {
  const [user, setUser] = useLocalStorage("member", []);
  const [success, setSuccess] = useState(false);
  const [errmsg, showErrMsg] = useState(false);
  const history = useHistory();
  const createUser = (values: {
    id: string;
    firstName?: string;
    lastName?: string;
    mobileNumber?: string;
    emailid?: string;
    password?: string;
    cnfPassword?: string;
  }) => {
    const notExistingUser = user.every((item: any) => {
      return (
        values.emailid !== item.eamilid &&
        values.mobileNumber !== item.mobileNumber
      );
    });
    if (notExistingUser) {
      if (localStorage.getItem("userid") !== null) {
        let id = localStorage.getItem("userid");
        values["id"] = id ? id : "0";
      } else {
        localStorage.setItem("userid", "0");
        values["id"] = "0";
      }

      localStorage.setItem("userid", `${parseInt(values.id) + 1}`);
      setUser([values, ...user]);
      setSuccess(true);
      setTimeout(() => {
        history.push("/Signin");
      }, 1000);
    } else {
      window.alert("Already existing user!");
    }
  };
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
    if (!values.emailid.match("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+$"))
      errors.emailid = "Enter a valid emailid ";

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
      id: "",
      firstName: "",
      lastName: "",
      emailid: "",
      mobileNumber: "",
      password: "",
      cnfPassword: "",
    },
    validate,
    onSubmit: (values) => {
      createUser(values);
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
          {success ? (
            <div className="ui green label" style={{ fontWeight: 500 }}>
              <i className=" check icon"></i>
              {"Successfully created"}
            </div>
          ) : null}
          <form
            className="form-group "
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
                  value={!success ? formik.values.firstName : ""}
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
                  value={!success ? formik.values.lastName : ""}
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
                  value={!success ? formik.values.emailid : ""}
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
                  value={!success ? formik.values.password : ""}
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
                  type="password"
                  className="form-control"
                  name="cnfPassword"
                  id="cnfPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={!success ? formik.values.cnfPassword : ""}
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
                  value={!success ? formik.values.mobileNumber : ""}
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
