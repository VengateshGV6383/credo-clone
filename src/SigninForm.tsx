import React from "react";

import useMyFormhooks from "./hooks/useMyFormhooks";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
interface Form {
  [k: string]: string;
  username: string;
  password: string;
  role: string;
}
interface Props {
  onSuccessLogin: () => void;
}
const SigninForm = (props: Props) => {
  const user: any = localStorage.getItem("member");
  const [err, ShowError] = useState(false);
  const [subErrmsg, setSuberrMsg] = useState(false);
  const [text, setText] = useState(" ");
  const history = useHistory();
  const validateForm = (values: Partial<Form>) => {
    const errors: any = {};
    if (!values.username) errors.username = "Enter you registered email id";

    if (!values.password) errors.password = "Required";

    if (!values.role) errors.role = "Select any role";

    return errors;
  };
  const onVlaidatingSubmission = (values: {
    username?: string;
    role?: string;
    password?: string;
  }): boolean => {
    const userArray = JSON.parse(user);
    const OldUser = userArray.filter(
      (item: any) => item.emailid === values.username
    );

    if (OldUser.length === 1) {
      if (values.password === OldUser[0].password) return true;
      else {
        setSuberrMsg(true);
        setText("Invalid password");
        setTimeout(() => setSuberrMsg(false), 3000);
        return false;
      }
    } else {
      setSuberrMsg(true);
      setText("Invalid Username");
      setTimeout(() => setSuberrMsg(false), 3000);
      return false;
    }
  };
  const formhooks = useMyFormhooks<Form>({
    initialValues: {
      username: "",
      password: "",
      role: "",
    },
    validateForm,
    onSubmit: (values) => {
      if (user) {
        if (onVlaidatingSubmission(values)) {
          setSuberrMsg(false);
          props.onSuccessLogin();
        }
      } else {
        window.alert("Some error occured reload the page");
      }
    },
  });

  return (
    <div
      className="ui segment "
      style={{
        overflow: "auto",
        margin: "auto",
        height: "calc(100% - 20%)",
      }}
    >
      <h3 style={{ fontFamily: "Poppins" }}>Signin</h3>
      <div className="row row-cols-12">
        <div className="col col-12">
          {subErrmsg ? (
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
        </div>
      </div>
      <form
        className="ui form"
        onSubmit={formhooks.handleSubmit}
        style={{ fontFamily: "Poppins" }}
      >
        <div className="ui field m-1">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            name="username"
            onChange={formhooks.handleChange}
            value={formhooks.values.username}
            placeholder="Enter you registered mailid"
          />
        </div>
        {formhooks.errors.username && err ? (
          <div className="ui  pointing basic red label">
            {formhooks.errors.username}
          </div>
        ) : null}

        <div className="ui field m-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={formhooks.handleChange}
            value={formhooks.values.password}
            name="password"
          />
        </div>
        {formhooks.errors.password && err ? (
          <div className="ui  pointing basic red label">
            {formhooks.errors["password"]}
          </div>
        ) : null}
        <div className="row row-cols-12 mb-2">
          <div className="col col-12">
            <NavLink to="/credo-clone/resetpwd">{"Forgot Password"}</NavLink>
          </div>
        </div>
        <div className="ui field m-1">
          <label> Role</label>
          <select
            name="role"
            onChange={formhooks.handleChange}
            value={formhooks.values.role}
          >
            <option value=" ">Select</option>
            <option value="Admin">Admin</option>
            <option value="Health Coach">Health Coach</option>
          </select>
        </div>
        {formhooks.errors.role && err ? (
          <div className="ui  pointing label">{formhooks.errors.role}</div>
        ) : null}
        <div className="row row-cols-12 m-2">
          <div className="col col-6">
            <button
              type="submit"
              onClick={() => ShowError(true)}
              className="m-1 ui primary button"
            >
              Submit
            </button>
          </div>
          <div className="col col-6">
            <button
              className="m-1 ui button"
              type="button"
              style={{ fontFamily: "Poppins" }}
              onClick={() => history.push("/credo-clone/register")}
            >
              Newuser?
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
