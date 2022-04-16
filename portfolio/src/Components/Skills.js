import React from 'react';


function Skills() {
    return ( 
        <div className="presentation">
            <h1>Skills</h1>
            <div class="skills-container">
        <p>Voici toutes les compétences que j'ai acquis. Cette section va certainement s'agrandir, puisque je suis toujours en formation!</p>
        <div class="skills-grid-container">
          <div class="skill-card one-line">
            <p><i class="fas fa-code"></i></p>
            <p>HTML5</p>
          </div>
          <div class="skill-card one-line">
            <p><i class="fab fa-css3"></i></p>
            <p>CSS3</p>
          </div>
          <div class="skill-card one-line">
            <p><i class="fab fa-js"></i></p>
            <p>JavaScript</p>
          </div>
          <div class="skill-card one-line">
            <p><i class="fab fa-react"></i></p>
            <p>React</p>
          </div>
          <div class="skill-card one-line">
            <p><i class="fas fa-atom"></i></p>
            <p>Redux</p>
          </div>
          <div class="skill-card one-line">
            <p><i class="fab fa-angular"></i></p>
            <p>Angular</p>
          </div>
          <div class="skill-card one-line">
            <p><i class="fab fa-php"></i></p>
            <p>PHP</p>
          </div>
          <div class="skill-card one-line">
            <p><i class="fas fa-database"></i></p>
            <p>SQL</p>
          </div>
          <div class="skill-card one-line">
            <p><i class="fab fa-git-alt"></i></p>
            <p>Git et GitHub</p>
          </div>
          <div class="skill-card one-line">
            <p><i class="fas fa-palette"></i></p>
            <p>Design Visuel</p>
          </div>
          <div class="skill-card">
            <p><i class="fas fa-crop"></i></p>
            <p>Manipulation d'images</p>
          </div>
          <div class="skill-card">
            <p><i class="fab fa-accessible-icon"></i></p>
            <p>Standards d'accessibilité</p>
          </div>
          <div class="skill-card one-line">
            <p><i class="far fa-comments"></i></p>
            <p>Anglais</p>
          </div>
          <div class="skill-card one-line">
            <p><i class="far fa-comments"></i></p>
            <p>Français</p>
          </div>
        </div>
      </div>
        </div>
     );
}

export default Skills;