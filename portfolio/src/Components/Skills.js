import React from "react";
import { SkillCard } from "./SkillCard";
import { skills } from "../App/data.js";

export function Skills() {

    return(
        <section className="skills">
            <h2 id="skills">Skills</h2>
            <p>Here are the abilities I bring to the table.</p>
            {skills.map((item, index) => <SkillCard data={item} key={index}/>)}
        </section>
    );
}