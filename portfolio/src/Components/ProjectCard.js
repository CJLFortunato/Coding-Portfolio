import React from "react";

function ProjectCard(props) {
    
    return (
        <div className="project-card">
            <img src="./Ressources/project_portfolio.jpg" className="project-img-left" />
            <div className="project-card-img-p-ctn">
                <h3>Portfolio</h3>
                <p>Ce site! C'est une simple page HTML avec un peu de CSS, mais la façon dont elle est structurée
                    peut vous intéresser.</p>
                <div className="link-ctn">
                    <a href="" className="deployed">Vous voyez le résultat!</a>
                    <a href="https://github.com/CJLFortunato/Coding-Portfolio" target="_blank"
                        className="github">GitHub</a>
                </div>

            </div>
        </div>
    );
}

export default ProjectCard;