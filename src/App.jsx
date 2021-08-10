import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

import MenuBar from "./MenuBar";
import Router from "./Router";
import Footer from "./Footer";
import { useRef, useState } from "react";
const App = () => {
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
          <Router
            theme={theme}
            dashboardtheme={dashboardtheme}
            ThemeContext={ThemeContext}
          />
        </BrowserRouter>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default App;
