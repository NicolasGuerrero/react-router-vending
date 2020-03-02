import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink className="NavBar-link" exact to="/">
        Home
      </NavLink>
      <NavLink className="NavBar-link" exact to="/chips">
        Chips
      </NavLink>
      <NavLink className="NavBar-link"  exact to="/soda">
        Soda
      </NavLink>
      <NavLink  className="NavBar-link" exact to="/candy">
        Candy
      </NavLink>
    </nav>
  );
}

export default NavBar;