// src/views/Activiteiten.js
import React, { useEffect } from "react";
import InstaFeed from "../components/InstaFeed";
import { useAuth0 } from "@auth0/auth0-react";

const InstaFeed = useAuth0(); {

   (<div><InstaFeed></InstaFeed>{JSON.stringify(activities)}</div>)
};

export default InstaFeed;
