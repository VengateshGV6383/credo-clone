import React from "react";

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
    </div>
  );
};

export default User;
