// src/components/nav-bar.js

import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
              <div className="container">
                  <img src="https://i.ibb.co/T0SSqgt/Stokers-Logo-No-Background.png" alt="StokersLogo" width="100" height="100"></img>

          {/*<div className="navbar-brand logo" />*/}
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
