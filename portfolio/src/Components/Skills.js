import React from 'react';


function Skills() {
    return ( 
      <div className="skills">
        <h1>Compétences</h1>

        <div className="cards-ctn">

          <div className='skills-card-ctn'>
            <h3>Front-End</h3>
            <div className="skills-grid-container">
              <div className="skill-card one-line">
                <p><i className="fas fa-code"></i></p>
                <p>HTML5</p>
              </div>
              <div className="skill-card one-line">
                <p><i className="fab fa-css3"></i></p>
                <p>CSS3</p>
              </div>
              <div className="skill-card one-line">
                <p><i className="fab fa-js"></i></p>
                <p>JavaScript</p>
              </div>
              <div className="skill-card one-line">
                <p><i className="fab fa-react"></i></p>
                <p>React</p>
              </div>
              <div className="skill-card one-line">
                <p><i className="fas fa-atom"></i></p>
                <p>Redux</p>
              </div>
              <div className="skill-card one-line">
                <p><i className="fab fa-angular"></i></p>
                <p>Angular</p>
              </div>
            </div>
          </div>

          <div className='skills-card-ctn'>
            <h3>Back-End</h3>
            <div className="skills-grid-container">
              <div className="skill-card one-line">
                <p><i className="fab fa-php"></i></p>
                <p>PHP</p>
              </div>
              <div className="skill-card one-line">
                <p><i className="fas fa-database"></i></p>
                <p>SQL</p>
              </div>
              <div className="skill-card one-line">
                <p><i className="fa-brands fa-node-js"></i></p>
                <p>NodeJS</p>
              </div>
              <div className="skill-card one-line">
                <p><i className="fa-regular fa-copy"></i></p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>

          <div className='skills-card-ctn'>
            <h3>Miscellaneous</h3>
            <div className="skills-grid-container">
              <div className="skill-card one-line">
                <p><i className="fab fa-git-alt"></i></p>
                <p>Git et GitHub</p>
              </div>
              <div className="skill-card one-line">
                <p><i className="fas fa-palette"></i></p>
                <p>Design Visuel</p>
              </div>
              <div className="skill-card">
                <p><i className="fas fa-crop"></i></p>
                <p>Manipulation d'images</p>
              </div>
              <div className="skill-card">
                <p><i className="fab fa-accessible-icon"></i></p>
                <p>Standards d'accessibilité</p>
              </div>
              <div className="skill-card one-line">
                <p><i className="far fa-comments"></i></p>
                <p>Anglais</p>
              </div>
              <div className="skill-card one-line">
                <p><i className="far fa-comments"></i></p>
                <p>Français</p>
              </div>
            </div>
          </div>

        </div>



      </div>
       
     );
}

export default Skills;