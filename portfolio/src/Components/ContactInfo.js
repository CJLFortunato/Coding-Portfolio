import React from "react";


export function ContactInfo() {
    return(
        <section className="contact-info">
            <h1>Contact Me</h1>
        <p>Like what you see? Please contact me so we can discuss how I can be of value for your project!</p>
        <p>You can find me at:</p>
        <ul>
            <li><i class="fas fa-envelope"></i><a href="mailto:clemence.fortunato@gmail.com" target="_blank">clemence.fortunato@gmail.com</a></li>
            <li><i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/clemencefortunato" target="_blank">LinkedIn</a></li>
            <li><i class="fab fa-twitter-square"></i><a href="https://twitter.com/cjlfortunato" target="_blank">Twitter</a></li>
            <li><i class="fab fa-github"></i><a href="https://github.com/CJLFortunato" target="_blank">GitHub</a></li>
            
              
        </ul>
        </section>
    );
}