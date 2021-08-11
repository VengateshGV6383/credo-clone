import React from "react";
import { NavLink } from "react-router-dom";
const User = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <span className="m-2">
        <h4>
          <i className="user circle icon"></i>Admin
        </h4>
      </span>

      <NavLink to="/register" style={{ textDecorationLine: "none" }}>
        <span
          className="m-1  p-2"
          style={{
            color: "rgb(255, 103, 0)",
            fontSize: "1rem",
            backgroundColor: "#ffff",
            border: "1px solid rgb(255, 103, 0)",
            borderRadius: "10px",
          }}
        >
          Signin
        </span>
      </NavLink>
    </div>
  );
};

export default User;
