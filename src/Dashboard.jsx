import React from "react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import VitalCards from "./VitalCards";
import UserDetails from "./UserDetails";
import { useEffect } from "react";

const Dashboard = (props) => {
  const location = useLocation();
  useEffect(() => {
    return () => {
      setDarkMode();
    };
  });

  const { id } = location.state ? location.state : { id: "1" };
  const { ThemeContext, theme, setDarkMode, dashboardtheme } = props;
  return (
    <React.Fragment>
      <div
        className="container-fluid m-1 cotainer-body"
        style={{ backgroundColor: theme ? "rgba(42, 42, 42, 1)" : "#ffff" }}
      >
        <div className="row row-cols-12 justify-content-end">
          <div
            className="col col-3 p-2 m-2"
            style={{
              border: "2px solid transparent",
              borderRadius: "10px",
              width: "max-content",

              backgroundColor: "#BB86FC",
              cursor: "pointer",
            }}
          >
            <div className="form-check form-switch m-1">
              <input
                type="checkbox"
                className="form-check-input"
                id="switchDark"
                onChange={() => setDarkMode()}
              />
              <label
                className="form-check-label"
                htmlFor="switchDark"
                style={{
                  fontFamily: "Poppins",
                  cursor: "pointer",
                  color: "#fffff",
                }}
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
        <ThemeContext.Provider
          value={theme ? dashboardtheme.dark : dashboardtheme.light}
        >
          <UserDetails id={id} ThemeContext={ThemeContext} />
        </ThemeContext.Provider>
        <div className="row justify-content-evenly align-items-start">
          <div className="row row-cols-4 flex justify-content-evenly macro-details ">
            <ThemeContext.Provider
              value={theme ? dashboardtheme.dark : dashboardtheme.light}
            >
              <VitalCards id={id} {...props} ThemeContext={ThemeContext} />
            </ThemeContext.Provider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
