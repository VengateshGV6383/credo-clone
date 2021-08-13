import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Chart from "./Chart";
import MainContent from "./MainContent";

import SigninForm from "./SigninForm";
import UserCreation from "./UserCreation";
import ForgotPassword from "./ForgotPassword";

const Router = ({
  ThemeContext,
  dashboardtheme,
  theme,
  onSuccessLogin,
  valid,
}) => {
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
      <Route path={"/credo-clone/Signin"}>
        <SigninForm onSuccessLogin={onSuccessLogin} />
      </Route>
      <Route path={"/credo-clone/resetpwd"}>
        <ForgotPassword />
      </Route>
      <Route path={"/credo-clone/register"}>
        <UserCreation />
      </Route>
      {menuItems.map((item, index) => {
        return valid === "true" ? (
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
        ) : (
          <Redirect to="/Signin" />
        );
      })}

      {menuItems.map((item, index) => {
        return valid === "true" ? (
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
        ) : (
          <Redirect to="/credo-clone/Signin" />
        );
      })}
      {menuItems.map((item, index) => {
        return valid === "true" ? (
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
        ) : (
          <Redirect to="/credo-clone/Signin" />
        );
      })}
    </Switch>
  );
};

export default Router;
