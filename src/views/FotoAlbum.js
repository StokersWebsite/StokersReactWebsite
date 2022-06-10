// src/views/Activiteiten.js
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const FotoAlbum = () => {
   return (
      <div className="App">
        <h3>Stokers single "Mooi Man"</h3>
        <iframe width="500" height="400" src="https://www.youtube.com/embed/UgzxGebSAGw" frameborder="5" allowfullscreen></iframe>
        <h3>Stokers Pers conferentie</h3>
        <iframe width="500" height="400" src="https://www.youtube.com/embed/8GQsqaLKJLc" frameborder="5" allowfullscreen></iframe>
      </div>
    );
  }

export default FotoAlbum;