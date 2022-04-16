import React, { useState } from 'react';


function Projects( { children }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        const nbCards = document.getElementsByClassName("project-card").length;
        console.log(nbCards);
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= nbCards) {
            newIndex = nbCards -1;
        }

        setActiveIndex(newIndex);
    }

    return (
        <div className="projects">
            <h1>Projets personels</h1>

            <div className="projects-container">
                <button onClick={() => updateIndex(activeIndex - 1)}><i className="fa-solid fa-angle-left"></i></button>
                <div className="carousel">
                    <div className="inner" style={{ transform: `translateX(-${activeIndex * 25}%)` }}>

                        <div className="project-card">
                            <img src="./Ressources/project_portfolio.jpg" className="project-img-left" />
                            <div className="project-card-img-p-ctn">
                                <h3>Portfolio</h3>
                                <p>Ce site! C'est une simple page HTML avec un peu de CSS, mais la façon dont elle est structurée peut vous intéresser.</p>
                                <div className="link-ctn">
                                    <a href="" className="deployed">Vous voyez le résultat!</a>
                                    <a href="https://github.com/CJLFortunato/Coding-Portfolio" target="_blank" className="github">GitHub</a>
                                </div>

                            </div>
                        </div>

                        <div className="project-card">
                            <img src="./Ressources/project_dice.jpg" className="project-img-right" />
                            <div className="project-card-img-p-ctn">
                                <h3>Lanceur de dés</h3>
                                <p>Un site simple qui vous permet de lancer des dés, avec un focus sur les jeux de rôle sur table.
                                    Utile si vous avez oublié vos dés ou que vous n'en avez pas assez pour déterminer les dégâts causés par la boule de feu que vous venez de lancer.</p>
                                <div className="link-ctn">
                                    <a href="https://cjlfortunato.github.io/Dice-roller/" target="_blank" className="deployed">Voir site</a>
                                    <a href="https://github.com/CJLFortunato/Dice-roller" target="_blank" className="github">GitHub</a>
                                </div>

                            </div>
                        </div>

                        <div className="project-card">
                            <img src="./Ressources/project_goblin.jpg" className="project-img-left" />
                            <div className="project-card-img-p-ctn">
                                <h3>Goblin market</h3>
                                <p>Ce projet a été réalisé en tant que projet final pour le parcours professionel Front-end Engineer du site Codecademy.
                                    Il s'agit d'un site d'e-commerce avec un twist <em>fantasy</em>. Seule la partie Front-end a été réalisée, il n'y a pas de back-end. Les principales fonctionalités sont là,
                                    mais il s'agit d'un work in progress. Réalisé avec React et redux.</p>

                                <div className="link-ctn">
                                    <a href="https://goblin-market.netlify.app" target="_blank" className="deployed">Voir site</a>
                                    <a href="https://github.com/CJLFortunato/Goblin-Market" target="_blank" className="github">GitHub</a>
                                </div>

                            </div>

                        </div>
                        <div className="project-card">
                            <img src="./Ressources/project_jammming.jpg" className="project-img-right" />
                            <div className="project-card-img-p-ctn">
                                <h3>Jammming</h3>
                                <p>Ce site est un projet Codecademy basé sur l'API du site Spotify.
                                    Il permet à l'utilisateur de chercher des pistes de chansons et de les ajouter à une nouvelle playlist sur leur compte.
                                    Réalisé avec React.</p>

                                <div className="link-ctn">
                                    <a href=" http://react-jammming-music.surge.sh/" target="_blank" className="deployed">Voir site</a>
                                    <a href="https://github.com/CJLFortunato/Jammming" target="_blank" className="github">GitHub</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => updateIndex(activeIndex + 1)}><i className="fa-solid fa-angle-right"></i></button>
            </div>


        </div>
    );
}

export default Projects;