import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Chart from "./Chart";
import MainContent from "./MainContent";

import SigninForm from "./SigninForm";
import UserCreation from "./UserCreation";
import ForgotPassword from "./ForgotPassword";
import SurveyForm from "./SurveyForm";
import AddNewuserForm from "./AddNewuserForm";

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
      <Route path={"/credo-clone/survey"}>
        {valid === "true" ? (
          <SurveyForm />
        ) : (
          <Redirect to="/credo-clone/Signin" />
        )}
      </Route>
      <Route path={"/credo-clone/newmember"}>
        {valid === "true" ? (
          <AddNewuserForm />
        ) : (
          <Redirect to="/credo-clone/Signin" />
        )}
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
                : `/credo-clone/${item.toLowerCase().replace(" ", "-")}`
            }
            exact={true}
          />
        ) : (
          <Redirect to="/credo-clone/Signin" key="main1" />
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
                : `/credo-clone/${item
                    .toLocaleLowerCase()
                    .replace(" ", "-")}/dashboard`
            }
            exact={true}
          />
        ) : (
          <Redirect to="/credo-clone/Signin" key={"main2"} />
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
                : `/credo-clone/${item
                    .toLocaleLowerCase()
                    .replace(" ", "-")}/dashboard/Chart`
            }
            exact={true}
          />
        ) : (
          <Redirect to="/credo-clone/Signin" key={"main3"} />
        );
      })}
    </Switch>
  );
};

export default Router;
