// src/views/Activiteiten.js
import React, { useEffect } from "react";
import ActivityAPI from "../API/ActivityAPI";
import { useAuth0 } from "@auth0/auth0-react";
import ActivityCard from "../components/ActivityCard";
import activities from "../components/ActivityCard";
import AddActivity from "../components/AddActivity";

const ActiviteitenToevoegen = () => {

  return (<div><AddActivity></AddActivity></div>)
};

export default ActiviteitenToevoegen;
