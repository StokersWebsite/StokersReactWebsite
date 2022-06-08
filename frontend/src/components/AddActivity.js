import React, { useEffect } from "react";
import AddActivityAPI from "../API/AddActivityAPI";
import { useAuth0 } from "@auth0/auth0-react";

const AddActivity = () => (
    <button
    className="btn btn-primary btn-block" onClick={() => {AddActivityAPI("http://localhost:5003", "fiets", "fietsenisleuk", "2022-09-09", "eindhoven", "23")}}>
    Activiteit Toevoegen
  </button>
);
export default AddActivity;
