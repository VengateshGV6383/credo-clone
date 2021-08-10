import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import Dashboard from "./Dashboard";
import Chart from "./Chart";
import MainContent from "./MainContent";

import SigninForm from "./SigninForm";

const Router = ({ ThemeContext, dashboardtheme, theme }) => {
  const history = useHistory();
  const onSuccessLogin = () => {
    localStorage.setItem("isValidUser", "true");
    history.push("/credo-clone/");
  };
  const menuItems = [
    "Home",
    "Counsellor",
    "Member Experience",
    "Health Coach",
    "Care Manager",
    "Paharmacologist",
    "Nutrionist",
    "Testing Doctor",
    "Daily TODOlog",
    "Others",
  ];

  return (
    <Switch>
      {menuItems.map((item, index) => {
        return (
          localStorage.getItem("isValidUser") && (
            <Route
              key={index}
              render={(props) => (
                <MainContent {...props} name={item} theme={theme} />
              )}
              path={
                item === "Home"
                  ? "/credo-clone/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              exact={true}
            />
          )
        );
      })}

      {menuItems.map((item, index) => {
        return (
          localStorage.getItem("isValidUser") && (
            <Route
              key={index}
              render={(props) => (
                <Dashboard
                  {...props}
                  ThemeContext={ThemeContext}
                  dashboardtheme={dashboardtheme}
                  theme={theme}
                />
              )}
              path={
                item === "Home"
                  ? "/credo-clone/dashboard"
                  : `/${item.toLocaleLowerCase().replace(" ", "-")}/dashboard`
              }
              exact={true}
            />
          )
        );
      })}
      {menuItems.map((item, index) => {
        return (
          localStorage.getItem("isValidUser") && (
            <Route
              key={index}
              render={(props) => (
                <Chart
                  {...props}
                  ThemeContext={ThemeContext}
                  dashboardtheme={dashboardtheme}
                  theme={theme}
                />
              )}
              path={
                item === "Home"
                  ? "/credo-clone/dashboard/Chart"
                  : `/${item
                      .toLocaleLowerCase()
                      .replace(" ", "-")}/dashboard/Chart`
              }
              exact={true}
            />
          )
        );
      })}

      <Route path={"/"}>
        {localStorage.getItem("isValidUser") ? (
          <Redirect to="/credo-clone/" />
        ) : (
          <SigninForm onSuccessLogin={onSuccessLogin} />
        )}
      </Route>
    </Switch>
  );
};

export default Router;
