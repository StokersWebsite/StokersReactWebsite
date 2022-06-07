import React, { useEffect } from "react";
import ActivityAPI from "../API/ActivityAPI";

// const Iprops= () => {           
//     ID,
//     Description,       
//     Title,
//     LocationBased,
//     MaxPeople,
//     MinPeople,
//     StartEvent
// }

function ActivityCard (){
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
              <div>Be patient</div>
      }
        </div>
      )
    }

export default ActivityCard