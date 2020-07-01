import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px"
      }}>
      <NavLink
        to="/drugs"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}>
        Drugs
      </NavLink>
      <NavLink
        to="/pharmacies"
        exact
        style={link}
        activeStyle={{
          background: "darkblue"
        }}>
        Pharmacies
      </NavLink>
    </div>
  );
};
/* Add basic styling for NavLinks */
const link = {
  marginRight: "10px",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};
export default NavBar;
