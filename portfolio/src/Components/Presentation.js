import React from "react";


export function Presentation() {

    const profilPicture = require("../Ressources/photo_profil copy.jpg");
     
    return(
        <section className="presentation">
            <h1 id="introduction">Hello World!</h1>
            <h2>I'm CJL Fortunato, Front-End Web Developper</h2>
            <img src={profilPicture} alt="CJL Fortunato" className="profile-picture" />
            
            <p>I am a Front-End web designer currently based in Bordeaux, France. My background in visual arts gives me a unique 
            perspective and plenty of design stills to apply to your projects.</p>
            
        </section>
    );
}