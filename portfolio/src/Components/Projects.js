import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../App/data";

export function Projects() {

    return(
        <section className="projects">
            <h2 id="projects">Sample Projects</h2>
            <p>Here are the projects I've built to demonstrate my abilities.</p>
            {projects.map((item) => <ProjectCard data={item} />)}
        </section>
    );
}