import React from "react";
//import { useformhooks } from "formik";
import useMyFormhooks from "./hooks/useMyFormhooks";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { useHistory } from "react-router-dom";
interface Form {
  [key: string]: string;
  id: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  emailid: string;
  password: string;
  cnfPassword: string;
}
const UserCreation = () => {
  const [user, setUser] = useLocalStorage("member", []);
  const [success, setSuccess] = useState(false);
  const [text, setText] = useState(" ");
  const [errmsg, showErrMsg] = useState(false);
  const history = useHistory();
  const createUser = (values: Partial<Form>) => {
    const notExistingUser = user.every((item: Form) => {
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
      setText("success");
      setTimeout(() => {
        history.push("/Signin");
      }, 1000);
    } else {
      setSuccess(true);
      setText("warning");
      setTimeout(() => setSuccess(false), 2000);
    }
  };
  const validateForm = (values: Partial<Form>): Form => {
    const errors: any = {};
    if (!values.firstName) errors.firstName = "Required";
    else if (values.firstName.length > 25)
      errors.firstName = "Only 25 characters are allowed";
    if (!values.lastName) errors.lastName = "Required";
    else if (values.lastName.length > 25)
      errors.firstName = "Only 25 characters are allowed";
    if (!values.emailid) errors.emailid = "Required";
    if (
      values.emailid &&
      values.emailid.match("^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+$")
    )
      errors.emailid = "Enter a valid emailid ";

    if (!values.password) errors.password = "Required";
    if (
      values.password &&
      (values.password.match("([A-Z])") ||
        !values.password.match("([0-9])") ||
        !values.password.match("([a-z])") ||
        !values.password.match("([!|@|#|$|%|^|&|*|_]){1,}"))
    )
      errors.password = "Enter a valid password";
    if (!values.cnfPassword) errors.cnfPassword = "Retype your password";
    if (values.cnfPassword !== values.password)
      errors.cnfPassword = "Password does not matched";
    if (!values.mobileNumber) errors.mobileNumber = "Required";

    if (values.mobileNumber && values.mobileNumber.length < 10)
      errors.mobileNumber = "Enter a valid mobile number";
    if (
      values.mobileNumber &&
      (!values.mobileNumber.match("[0-9]{10}") ||
        values.mobileNumber.length > 10)
    )
      errors.mobileNumber = "Enter a valid mobile number";

    return errors;
  };
  const formhooks = useMyFormhooks<Form>({
    initialValues: {
      id: "",
      firstName: "",
      lastName: "",
      emailid: "",
      mobileNumber: "",
      password: "",
      cnfPassword: "",
    },
    validateForm,
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
          {formhooks.isEmpty ? (
            <div className="ui icon basic red label">
              <i className="ui x icon"></i>
              {"No Empty Fields should occur"}
            </div>
          ) : null}
          <div className="card-title m-1">Credo Member Registration</div>
          {success ? (
            <div
              className={
                text === "success" ? "ui green label" : "ui basic red label"
              }
              style={{ fontWeight: 500 }}
            >
              <i
                className={text === "success" ? "check icon" : "ui x icon"}
              ></i>
              {text === "success"
                ? "Successfully created"
                : "Already existing user"}
            </div>
          ) : null}
          <form
            className="form-group "
            onSubmit={formhooks.handleSubmit}
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
                  onChange={formhooks.handleChange}
                  value={text !== "success" ? formhooks.values.firstName : ""}
                  required
                />
                {formhooks.showErrors &&
                formhooks.errors.firstName &&
                errmsg ? (
                  <div className="ui pointing red basic label">
                    {formhooks.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="col col-6  col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  onChange={formhooks.handleChange}
                  value={text !== "success" ? formhooks.values.lastName : ""}
                  required
                />
                {formhooks.showErrors && formhooks.errors.lastName && errmsg ? (
                  <div className="ui pointing red basic label">
                    {formhooks.errors.lastName}
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
                  onChange={formhooks.handleChange}
                  required
                  value={text !== "success" ? formhooks.values.emailid : ""}
                />
                {formhooks.showErrors && formhooks.errors.emailid && errmsg ? (
                  <div className="ui pointing red basic label">
                    {formhooks.errors.emailid}
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
                  onChange={formhooks.handleChange}
                  value={text !== "success" ? formhooks.values.password : ""}
                  required
                />
                {formhooks.showErrors && formhooks.errors.password && errmsg ? (
                  <div className="ui pointing red basic label">
                    {formhooks.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="col col-6 col-md-4">
                <input
                  type="password"
                  className="form-control"
                  name="cnfPassword"
                  id="cnfPassword"
                  onChange={formhooks.handleChange}
                  value={text !== "success" ? formhooks.values.cnfPassword : ""}
                  required
                />
                {formhooks.showErrors &&
                formhooks.errors.cnfPassword &&
                errmsg ? (
                  <div className="ui pointing red basic label">
                    {formhooks.errors.cnfPassword}
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
                  onChange={formhooks.handleChange}
                  value={
                    text !== "success" ? formhooks.values.mobileNumber : ""
                  }
                  required
                />

                {formhooks.showErrors &&
                formhooks.errors.mobileNumber &&
                errmsg ? (
                  <div className="ui pointing red basic label">
                    {formhooks.errors.mobileNumber}
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
