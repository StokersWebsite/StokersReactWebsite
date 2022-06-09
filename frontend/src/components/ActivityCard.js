import React, { useEffect } from "react";
import ActivityAPI from "../API/ActivityAPI";
import { useAuth0 } from "@auth0/auth0-react";
import {NavLink} from "react-router-dom";
import {Link} from "react-router"

// const Iprops= () => {           
//     ID,
//     Description,       
//     Title,
//     LocationBased,
//     MaxPeople,
//     MinPeople,
//     StartEvent
// }
// let navigate = useNavigate(); 
// const routeChange = () =>{ 
//   let path = `http://localhost:4040/ActiviteitenToevoegen`; 
//   navigate(path);
// }

function ActivityCard (){
  const { user } = useAuth0();
  const [activities, setActivities] = React.useState();

  useEffect(() => {
    if (activities === undefined) {
      ActivityAPI("http://localhost:5003").then((json) => {
        setActivities(json);
        console.log(JSON.stringify(json));
      });
    }
    console.log(activities)
  });

  return(<div>
      {
      activities !== undefined 
      ?
        <div style={{maxWidth: '500px'}} className="card">
          {
            activities.map(activity => {
              return (
                <div key={activity.id} className="card">
                  <h5 className="card-title">{activity.name}</h5>
                  <p className="card-text">Wat is dit? {activity.description}</p>
                  <p className="card-text">Wanneer? {activity.date}</p>
                  <p className="card-text">Voor hoeveel personen? {activity.maxMembers}</p>
                  <a href="#" size="50px" className="btn btn-primary"
                  style={{
                    maxWidth: '500px',
                    maxHeight: '500px',
                    minWidth: '30',
                    minheight: '30',
                  }}
                  >Ik doe mee!</a>
                {''}</div>
              )
            })
          }
        </div>
      :
          <div>Retrieving date from the API, please wait...</div>
      }
      
          {/* <div><button className="btn btn-primary btn-block" onClick={routeChange}>Activiteit Toevoegen</button></div> */}
          <NavLink to="/ActiviteitenToevoegen" className="btn btn-primary">Activiteit Toevoegen</NavLink>
      </div>
    )
}

export default ActivityCard