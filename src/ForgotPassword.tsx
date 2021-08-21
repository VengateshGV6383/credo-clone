import useMyFormhooks from "./hooks/useMyFormhooks";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
interface form {
  mobileNumber: string;
  password: string;
  cnfPassword: string;
}
const ForgotPassword = () => {
  const [user, setUser] = useLocalStorage("member");
  const history = useHistory();

  const [phnoErr, setPhnoErr] = useState(false);
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);

  //checks for the valid user with the phno
  // and sets PhnErr the phno if phno not found
  const onSubmission = (values: Partial<form>) => {
    if (user.length >= 1) {
      const OldUser = user.filter(
        (item: any) => item.mobileNumber === values.mobileNumber
      );
      if (OldUser[0]) {
        const remainingUser = user.filter(
          (item: any) => item.mobileNumber !== values.mobileNumber
        );
        OldUser[0].password = values.password;
        OldUser[0].cnfPassword = values.cnfPassword;

        setUser([OldUser[0], ...remainingUser]);
        setSuccess(true);
        setTimeout(() => {
          history.goBack();
        }, 1500);
      } else {
        setPhnoErr(true);
        setText("Phone number doesn't exist");
        setTimeout(() => setPhnoErr(false), 3000);
      }
    }
  };
  const validateForm = (values: Partial<form>) => {
    const errors: any = {};
    if (!values.mobileNumber)
      errors.mobileNumber = "Enter a valid phone number";
    if (!values.mobileNumber?.match("[0-9]{10}"))
      errors.mobileNumber = "Enter a valid phone number";
    if (!values.password) errors.password = "Required";
    if (
      !values.password?.match("([A-Z])") ||
      !values.password?.match("([0-9])") ||
      !values.password?.match("([a-z])") ||
      !values.password?.match("([!|@|#|$|%|^|&|*|_]){1,}")
    )
      errors.password = "Enter a valid password";
    if (!values.cnfPassword) errors.cnfPassword = "Retype your password";

    return errors;
  };
  const formhooks = useMyFormhooks<form>({
    initialValues: {
      mobileNumber: "",
      password: "",
      cnfPassword: "",
    },
    validateForm,
    onSubmit: (values) => {
      if (values.cnfPassword === values.password) onSubmission(values);
      else {
        setPhnoErr(true);
        setText("Password doesn't matches");
        setTimeout(() => setPhnoErr(false), 3000);
      }
    },
  });

  return (
    <div
      className="card  justify-slef-center align-self-center "
      style={{
        fontFamily: "Poppins",
        height: "calc(100% - 20%)",
        overflow: "auto",
      }}
    >
      <div className="card-body justify-centent-center align-items-center m-1">
        <h3 className="card-title mb-2">Reset Password</h3>
        {success ? (
          <div className="ui green label" style={{ fontWeight: 500 }}>
            <i className="ui check icon"></i>
            {"Successfully created"}
          </div>
        ) : null}

        {phnoErr ? (
          <div className="ui basic red label" style={{ fontWeight: 500 }}>
            <i className="ui x icon"></i>
            {text}
          </div>
        ) : null}
        {formhooks.isEmpty ? (
          <div className="ui icon basic red label">
            <i className="ui x icon"></i>
            {"No Empty Fields should occur"}
          </div>
        ) : null}
        <form className="form-group " onSubmit={formhooks.handleSubmit}>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-12">
              <label className="form-label" htmlFor="mobileNumber">
                Enter your Phone number
              </label>
            </div>
          </div>
          <div className="row row-cols-12  m-1 p-1">
            <div className="col col-12">
              <input
                type="tel"
                name="mobileNumber"
                id="mobileNumber"
                className="form-control"
                onChange={formhooks.handleChange}
                value={formhooks.values.mobileNumber}
              />
            </div>
          </div>
          {formhooks.errors.mobileNumber ? (
            <div className="ui pointing red basic label">
              {formhooks.errors.mobileNumber}
            </div>
          ) : null}
          <div className="row row-cols-12  m-1 p-1">
            <div className="col col-12">
              <label className="form-label" htmlFor="password1">
                Type Password
              </label>
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-12">
              <input
                type="password"
                name="password"
                id="password1"
                className="form-control"
                onChange={formhooks.handleChange}
                value={formhooks.values.password}
              />
              {formhooks.errors.password ? (
                <div className="ui pointing red basic label">
                  {formhooks.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-12">
              <label className="form-label" htmlFor="password2">
                Confirm Password
              </label>
            </div>
          </div>
          <div className="row row-cols-12 m-1 p-1">
            <div className="col col-12">
              <input
                type="password"
                name="cnfPassword"
                id="password2"
                className="form-control"
                onChange={formhooks.handleChange}
                value={formhooks.values.cnfPassword}
              />
              {formhooks.errors.cnfPassword ? (
                <div className="ui pointing red basic label">
                  {formhooks.errors.cnfPassword}
                </div>
              ) : null}
            </div>
          </div>

          <div className="row row-cols-12 mt-2 m-1 p-1">
            <div className="col col-6 col-lg-4">
              <button type="submit" className="ui primary button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
