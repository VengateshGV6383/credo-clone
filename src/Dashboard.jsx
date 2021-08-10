import React from "react";
import "./Dashboard.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import VitalCards from "./VitalCards";
import UserDetails from "./UserDetails";

const Dashboard = (props) => {
  const location = useLocation();

  const { id } = location.state ? location.state : { id: "1" };
  const { ThemeContext, theme, dashboardtheme } = props;
  return (
    <React.Fragment>
      <div
        className="container-fluid m-1 cotainer-body"
        style={{ backgroundColor: theme ? "rgba(42, 42, 42, 1)" : "#ffff" }}
      >
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
