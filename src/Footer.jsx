import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <li>
        {" "}
        <i className="cogs icon"></i>
        {`Developed & Maintained by Credo Helath
        Services,`}
      </li>
      <li>
        <i className="copyright outline icon"></i>
        {`All Rights Reserverd Credo Helath Services Pvt.Ltd,`}
      </li>
      <li>{`Report | Terms and Conditons`}</li>
      <NavLink to="/credo-clone/survey" style={{ textDecorationLine: "none" }}>
        <li>{`Find time take a survey! `}</li>
      </NavLink>
    </footer>
  );
};

export default Footer;
