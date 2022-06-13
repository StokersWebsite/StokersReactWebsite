// src/app.js

import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading } from "./components";
import { Profile, Home } from "./views";
import Activiteiten from "./views/Activiteiten"
import FotoAlbum from "./views/FotoAlbum"
import ProtectedRoute from "./auth/protected-route";
import ActiviteitenToevoegen from "./views/ActiviteitenToevoegen";
import 'bootstrap/dist/css/bootstrap.min.css';


import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Activiteiten" exact component={Activiteiten} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/FotoAlbum" exact component={FotoAlbum} />
          <ProtectedRoute path="/ActiviteitenToevoegen" exact component={ActiviteitenToevoegen} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
