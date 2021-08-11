import React from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

interface Props {
  onSuccessLogin: () => void;
}
const SigninForm = (props: Props) => {
  const user: any = localStorage.getItem("member");

  const history = useHistory();
  const validate = (values: {
    username: String;
    password: String;
    role: String;
  }) => {
    const errors: any = {};
    if (!values.username) errors.username = "Required";

    if (!values.password) errors.password = "Required";

    if (!values.role) errors.role = "Required";

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      role: "",
    },
    validate,
    onSubmit: (values) => {
      const userArray = new Array(JSON.parse(user));
      const OldUser = userArray.filter(
        (item: any) => item.emailid === values.username
      );
      if (values.password === OldUser[0].password) props.onSuccessLogin();
      else {
        window.alert("Invalid Username or password");
      }
    },
  });

  return (
    <div
      className="ui segment m-2"
      style={{
        flexBasis: "25%",
        height: "calc(100% - 30%)",
        overflow: "auto",
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
            onBlur={formik.handleBlur}
            value={formik.values.username.trim()}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="ui  pointing label">{formik.errors.username}</div>
          ) : null}
        </div>

        <div className="ui field">
          <label htmlFor="password" style={{ fontFamily: "Poppins" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password.trim()}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="ui  pointing label">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="ui field">
          <select
            name="role"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role.trim()}
          >
            <option value=" ">Select</option>
            <option value="Admin">Admin</option>
            <option value="Health Coach">Health Coach</option>
          </select>
          {formik.touched.role && formik.errors.role ? (
            <div className="ui  pointing label">{formik.errors.role}</div>
          ) : null}
        </div>

        <button type="submit" className="m-1 ui primary button">
          Submit
        </button>
      </form>
      <button
        className="m-1 ui labeled icon  button"
        onClick={() => history.push("/register")}
      >
        <i className="ui sign in alternate icon"></i>
        New user
      </button>
    </div>
  );
};

export default SigninForm;
