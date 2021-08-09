import React from "react";
import { useFormik } from "formik";

interface Props {
  onSuccessLogin: () => void;
}
const SigninForm = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      role: "",
    },
    onSubmit: (values) => {
      if (
        values.username === "dev" &&
        values.password === "dev" &&
        values.role !== " "
      ) {
        props.onSuccessLogin();
      } else {
        window.alert("Username/Password is incorrect");
      }
    },
  });
  return (
    <div
      className="ui segment"
      style={{
        flexBasis: "25%",
        height: "70%",
        alignSelf: "center",
        alignContent: "center",
      }}
    >
      <h3 style={{ fontFamily: "Poppins" }}>Signin</h3>
      <form onSubmit={formik.handleSubmit} className="ui form">
        <div className="ui field">
          <label htmlFor="Username" style={{ fontFamily: "Poppins" }}>
            Username
          </label>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username.trim()}
          />
        </div>

        <div className="ui field">
          <label htmlFor="password" style={{ fontFamily: "Poppins" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password.trim()}
          />
        </div>
        <div className="ui field">
          <select
            name="role"
            onChange={formik.handleChange}
            value={formik.values.role.trim()}
          >
            <option value=" ">Select</option>
            <option value="Admin">Admin</option>
            <option value="Health Coach">Health Coach</option>
          </select>
        </div>
        <button type="submit" className="ui primary button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
