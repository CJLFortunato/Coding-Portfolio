import React from 'react';


function Projects() {
    return ( 
        <div className="presentation">
            <h1>Hello World</h1>
            <p>Tous les projets que j'ai réalisé pour monter en compétences.</p>

      <div class="projects-grid-container">

        <div class="project-card left">
          <img src="./Ressources/project_portfolio.jpg" class="project-img-left" />
          <div class="project-card-img-p-ctn">
              <h3>Portfolio</h3>
              <p>Ce site! C'est une simple page HTML avec un peu de CSS, mais la façon dont elle est structurée peut vous intéresser.</p>
                <div class="link-ctn">
                  <a href="" class="deployed">Vous voyez le résultat!</a>
                  <a href="https://github.com/CJLFortunato/Coding-Portfolio" target="_blank" class="github">GitHub</a>
                </div>
              
          </div>
        </div>

        <div class="project-card right">
          <img src="./Ressources/project_dice.jpg" class="project-img-right" />
          <div class="project-card-img-p-ctn">
            <h3>Lanceur de dés</h3>
            <p>Un site simple qui vous permet de lancer des dés, avec un focus sur les jeux de rôle sur table.
            Utile si vous avez oublié vos dés ou que vous n'en avez pas assez pour déterminer les dégâts causés par la boule de feu que vous venez de lancer.</p>
            <div class="link-ctn">
              <a href="https://cjlfortunato.github.io/Dice-roller/" target="_blank" class="deployed">Voir site</a>
              <a href="https://github.com/CJLFortunato/Dice-roller" target="_blank" class="github">GitHub</a> 
            </div>
            
          </div>
        </div>

        <div class="project-card left">
           <img src="./Ressources/project_goblin.jpg" class="project-img-left" />
          <div class="project-card-img-p-ctn">
            <h3>Goblin market</h3>           
            <p>Ce projet a été réalisé en tant que projet final pour le parcours professionel Front-end Engineer du site Codecademy.
            Il s'agit d'un site d'e-commerce avec un twist <em>fantasy</em>. Seule la partie Front-end a été réalisée, il n'y a pas de back-end. Les principales fonctionalités sont là, 
            mais il s'agit d'un work in progress. Réalisé avec React et redux.</p>
            
            <div class="link-ctn">
              <a href="https://goblin-market.netlify.app" target="_blank" class="deployed">Voir site</a>
              <a href="https://github.com/CJLFortunato/Goblin-Market" target="_blank" class="github">GitHub</a>   
            </div>
            
          </div>
          
        </div>
        <div class="project-card right">
          <img src="./Ressources/project_jammming.jpg" class="project-img-right" />
          <div class="project-card-img-p-ctn">
            <h3>Jammming</h3>
            <p>Ce site est un projet Codecademy basé sur l'API du site Spotify. 
            Il permet à l'utilisateur de chercher des pistes de chansons et de les ajouter à une nouvelle playlist sur leur compte.
            Réalisé avec React.</p>
            
            <div class="link-ctn">
              <a href=" http://react-jammming-music.surge.sh/" target="_blank" class="deployed">Voir site</a>
              <a href="https://github.com/CJLFortunato/Jammming" target="_blank" class="github">GitHub</a>  
            </div>
            
          </div>
        </div>

      </div>
        </div>
     );
}

export default Projects;