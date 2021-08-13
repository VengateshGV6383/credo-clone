import React from "react";
import MenuLinks from "./MenuLinks";
import "./MenuBar.css";
import { NavLink } from "react-router-dom";
const MenuBar = (props) => {
  const menuItems = [
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
    <div className="menu-bar" ref={props.refer}>
      <ul>
        {menuItems.map((item) => {
          return (
            <NavLink
              style={{ textDecorationLine: "none" }}
              to={`/credo-clone/${item.toLocaleLowerCase().replace(" ", "-")}`}
              activeClassName="active-link"
              key={menuItems.indexOf(item)}
            >
              <MenuLinks link={item} tabIndex="0">
                <i className="chevron right icon"></i>
              </MenuLinks>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuBar;
