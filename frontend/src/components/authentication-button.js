// src/components/authentication-button.js

import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

import { useAuth0 } from "@auth0/auth0-react";


//if logged in show log out button if logged out show log in button
const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
