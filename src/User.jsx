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

      <NavLink
        style={{
          color: "rgb(255, 103, 0)",
          padding: "2%",
          textDecorationLine: "none",
          backgroundColor: "#ffff",
          border: "1px solid rgb(255, 103, 0)",
          borderRadius: "10px",
        }}
        to="/register"
      >
        <span className="m-1" style={{ fontSize: "1rem" }}>
          Signin
        </span>
      </NavLink>
    </div>
  );
};

export default User;
