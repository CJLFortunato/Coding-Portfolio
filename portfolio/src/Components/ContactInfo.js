import React from "react";


export function ContactInfo() {
    return(
        <section className="contact-info">
            <h2>Contact Me</h2>
        <p>Like what you see? Please contact me so we can discuss how I can be of value for your project!</p>
        <p>You can find me at:</p>
        <ul>
            <li><i className="fas fa-envelope"></i><a href="mailto:clemence.fortunato@gmail.com" target="_blank" rel="noreferrer">clemence.fortunato@gmail.com</a></li>
            <li><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/clemencefortunato" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><i className="fab fa-twitter-square"></i><a href="https://twitter.com/cjlfortunato" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><i className="fab fa-github"></i><a href="https://github.com/CJLFortunato" target="_blank" rel="noreferrer">GitHub</a></li>
            
              
        </ul>
        </section>
    );
}