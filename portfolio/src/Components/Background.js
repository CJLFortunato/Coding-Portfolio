import React from "react";

export function Background() {

    const portrait = require("../Ressources/photo_profil copy.jpg");
     
    return(
        <section className="background">
            <h2 id="background">My background</h2>
            <img src={portrait} alt="" className="portrait" />
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Fugit ipsam iste sed blanditiis illo in corporis commodi delectus explicabo est itaque nobis, 
                esse neque ratione sint provident necessitatibus laborum? Quaerat.</p>
            
                <img src={portrait} alt="" className="timeline" />
            
        </section>
    );
}