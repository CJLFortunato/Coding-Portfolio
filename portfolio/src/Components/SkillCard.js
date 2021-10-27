import React from "react";

export function SkillCard(props) {

    const { icon, name } = props;
    return(
        <div className="skill-card">
            {icon}
            <p>{name}</p>
        </div>
    );
}