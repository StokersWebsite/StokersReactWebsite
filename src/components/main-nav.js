import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
    <NavLink
      to="/Activiteiten"
      exact 
      className="nav-link"
      activeClassName="router-link-exact-active"
      >
        Activiteiten
      </NavLink>
      <NavLink
      to="/FotoAlbum"
      exact 
      className="nav-link"
      activeClassName="router-link-exact-active"
      >
        Foto album
      </NavLink>
  </div>
);

export default MainNav;
