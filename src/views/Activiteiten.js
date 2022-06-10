// src/views/Activiteiten.js
import React, { useEffect } from "react";
import ActivityAPI from "../API/ActivityAPI";
import ActivityCard from "../components/ActivityCard";
import activities from "../components/ActivityCard";
import AddActivity from "../components/AddActivity";

const Activiteiten = () => {

  return (<div><ActivityCard></ActivityCard>{JSON.stringify(activities)}</div>)
};

export default Activiteiten;
