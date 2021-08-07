import React from "react";
import MenuBar from "./MenuBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Chart from "./Chart";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import { useRef, useState } from "react";
import "./App.css";
const App = () => {
  const [theme, setTheme] = useState(false);
  const menuIcon = useRef();
  const handleMenuBar = () => {
    try {
      if (menuIcon.current.style.display === "flex")
        menuIcon.current.style.display = "none";
      else menuIcon.current.style.display = "flex";
    } catch (e) {
      console.log(menuIcon.current);
    }
  };
  const dashboardtheme = {
    light: {
      vitalcards: {
        glucoseColor: "#49ABF5",
        pulseColor: "#F54949",
        weightColor: "#18A6AA",
        sleepColor: "#18A4A8",
        sugarColor: "#498BF5",
        stepsColor: "#FD7112",
        bpColor: "#F54949",
        activeTimeColor: "#18A448",
        waterColor: "#498BF5",
        foreColor: "#212529",
        backgroundColor: "#ffff",
        borderColor: "rgb(0,0,0,0.125)",
      },
    },
    dark: {
      vitalcards: {
        glucoseColor: "#BB86FC",
        sugarColor: "#BB86FC",
        waterColor: "#BB86FC",
        bpColor: "#FF7C7C",
        pulseColor: "#FF7C7C",
        weightColor: "#03DAC6",
        sleepColor: "#03DAC6",
        stepsColor: "#03DAC6",
        activeTimeColor: "#03DAC6",
        foreColor: "#ffff",
        backgroundColor: "#1F1B24",
        borderColor: "#BB86FC",
      },
    },
  };

  const ThemeContext = React.createContext(dashboardtheme);

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
    <React.Fragment>
      <div>
        <NavBar
          toggleMenuBar={handleMenuBar}
          setDarkMode={() => setTheme(!theme)}
        />
      </div>

      <div
        className="main-block"
        style={{ backgroundColor: theme ? "rgba(42, 42, 42, 1)" : "#ffff" }}
      >
        <BrowserRouter>
          <div style={{ display: "flex" }}>
            <MenuBar refer={menuIcon} />
          </div>
          <Switch>
            {menuItems.map((item, index) => {
              return item !== "Home" ? (
                <Route
                  key={index}
                  render={(props) => <MainContent {...props} name={item} />}
                  path={`/${item.toLowerCase().replace(" ", "-")}`}
                  exact={true}
                />
              ) : (
                <Route
                  key={index}
                  render={(props) => <MainContent {...props} name={item} />}
                  path="/credo-clone/"
                  exact={true}
                />
              );
            })}
            {menuItems.map((item, index) => {
              return item !== "Home" ? (
                <Route
                  key={index}
                  render={(props) => (
                    <Dashboard
                      {...props}
                      ThemeContext={ThemeContext}
                      dashboardtheme={dashboardtheme}
                      theme={theme}
                      setDarkMode={() => setTheme(!theme)}
                    />
                  )}
                  path={`/${item
                    .toLocaleLowerCase()
                    .replace(" ", "-")}/dashboard`}
                  exact={true}
                />
              ) : (
                <Route
                  key={index}
                  render={(props) => (
                    <Dashboard
                      {...props}
                      ThemeContext={ThemeContext}
                      dashboardtheme={dashboardtheme}
                      theme={theme}
                      setDarkMode={() => setTheme(!theme)}
                    />
                  )}
                  path={`/credo-clone/dashboard`}
                  exact={true}
                />
              );
            })}
            {menuItems.map((item, index) => {
              return item !== "Home" ? (
                <Route
                  key={index}
                  render={(props) => (
                    <Chart
                      {...props}
                      ThemeContext={ThemeContext}
                      dashboardtheme={dashboardtheme}
                      theme={theme}
                      setDarkMode={() => setTheme(!theme)}
                    />
                  )}
                  path={`/${item
                    .toLocaleLowerCase()
                    .replace(" ", "-")}/dashboard/Chart`}
                  exact={true}
                />
              ) : (
                <Route
                  key={index}
                  render={(props) => (
                    <Chart
                      {...props}
                      ThemeContext={ThemeContext}
                      dashboardtheme={dashboardtheme}
                      theme={theme}
                      setDarkMode={() => setTheme(!theme)}
                    />
                  )}
                  path={`/credo-clone/dashboard/Chart`}
                  exact={true}
                />
              );
            })}
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default App;
