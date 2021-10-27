import React from "react";

export function ProjectCard(props) {

    const { name, img, desc, siteLink, githubLink } = props;
    return(
        <div className="project-card">
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p>{desc}</p>
            <a href={siteLink}>View deployed project</a>
            <a href={githubLink}>View project GitHub</a>
        </div>
    );
}