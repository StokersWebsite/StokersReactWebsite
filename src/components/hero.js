/* eslint-disable */
import React from "react";

const logo = "https://i.ibb.co/T0SSqgt/Stokers-Logo-No-Background.png";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
        <h1 className="mb-4" styles={{color: 'green'}}>Stokers Website</h1>
    <p className="lead" styles={{color: 'yellow'}}>Welkom op de stokers website,</p>
           <p styles={{color: 'red'}}>Hier kun je zien welke activiteiten allemaal geplanned staan en wat we allemaal al hebben gedaan!</p>  
        
    </div>);

export default Hero;