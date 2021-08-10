import React from "react";
import { useFormik } from "formik";

interface Props {
  onSuccessLogin: () => void;
}
const SigninForm = (props: Props) => {
  const validate = (values: {
    username: String;
    password: String;
    role: String;
  }) => {
    const errors: any = {};
    if (!values.username) errors.username = "Required";
    else if (values.username.length > 3)
      errors.username = "Inccorrect username";

    if (!values.password) errors.password = "Required";
    else if (values.password.length > 3)
      errors.password = "Inccorrect password";

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
      console.log("Form submitted");
      if (values.password === "dev") props.onSuccessLogin();
    },
  });

  return (
    <div
      className="ui segment"
      style={{
        flexBasis: "25%",
        height: "calc(100% - 10%)",
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
        <button type="submit" className="ui primary button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
