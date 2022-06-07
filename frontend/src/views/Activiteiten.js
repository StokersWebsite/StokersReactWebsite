// src/views/Activiteiten.js
import React, { useEffect } from "react";
import ActivityAPI from "../API/ActivityAPI";
import ActivityCard from "../components/ActivityCard";
import activities from "../components/ActivityCard";

import { useAuth0 } from "@auth0/auth0-react";

const Activiteiten = () => {

  return (<div><ActivityCard></ActivityCard>{JSON.stringify(activities)}</div>)
};

export default Activiteiten;
