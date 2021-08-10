import React from "react";
import User from "./User";
import "./NavBar.css";
import Medium_logoImg from "./images/download.png";
const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <span>
          <img src={Medium_logoImg} alt="logo_Medium" />
        </span>
        <span onClick={props.toggleMenuBar}>
          <i className="bars icon"></i>
        </span>
      </div>
      <div className="nav-bar-right">
        <div className="row row-cols-12 justify-content-center align-items-center">
          <div className="col col-4 justify-content-end">
            <div className="form-check form-switch m-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkmodeswitch"
                style={{ cursor: "pointer" }}
                onChange={props.setDarkMode}
                checked={props.theme}
              />
              <label
                className="form-check-label"
                htmlFor="darkmodeswitch"
                style={{
                  fontFamily: "Poppins",
                  cursor: "pointer",

                  whiteSpace: "pre",
                  userSelect: "none",
                }}
              >
                {"Dark"}
              </label>
            </div>
          </div>
          <div className="col col-6">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
