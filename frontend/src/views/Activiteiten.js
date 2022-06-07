// src/views/Activiteiten.js
import React, { useEffect } from "react";
import ActivityAPI from "../API/ActivityAPI";
import ActivityCard from "../components/ActivityCard";
import activities from "../components/ActivityCard";

import { useAuth0 } from "@auth0/auth0-react";

const Activiteiten = () => {

//   const [activities, setActivities] = React.useState();

//   useEffect(() => {
//     if (activities === undefined) {
//       ActivityAPI("http://localhost:5002").then((json) => {
//         setActivities(json);
//         console.log(JSON.stringify(json));
//       });
//     }
//   });

  // if (activities.Title != null) {
  //   return (
  //     <>
  //       <div>
  //         <ActivityCard
  //           Title={activities.Title}
  //           Description={activities.Description}
  //         ></ActivityCard>
  //       </div>
  //       <div>{JSON.stringify(activities)}</div>
  //     </>
  //   );
  // }
  return (<div><ActivityCard></ActivityCard>{JSON.stringify(activities)}</div>)
};

export default Activiteiten;
