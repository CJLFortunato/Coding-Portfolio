import React, { useState } from 'react';
import ImgPortfolio from '../Ressources/project_portfolio.jpg';
import ImgDatabase from '../Ressources/project_database.jpg';
import ImgWeather from '../Ressources/project_weather.jpg';
import ImgJammming from '../Ressources/project_jammming.jpg';
import ImgDice from '../Ressources/project_dice.jpg';



function Projects( { children }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        const nbCards = document.getElementsByClassName("project-card").length;
        console.log(nbCards);
        if (newIndex < 0) {
            newIndex = nbCards -1;
        } else if (newIndex >= nbCards) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    return (
        <div className="projects">
            <h1>Projets personels</h1>

            <div className="projects-container">
                <button onClick={() => updateIndex(activeIndex - 1)}><i className="fa-solid fa-angle-left"></i></button>
                <div className="carousel">
                    <div className="inner" style={{ transform: `translateX(-${activeIndex * 20}%)` }}>

                        <div className="project-card">
                            <img src={ImgPortfolio} />
                            <div className="project-card-img-p-ctn">
                                <h3>Portfolio</h3>
                                <p>Ce site! Refait intégralement le 16 avril 2022 en utilisant React et React-router. Cliquez sur les flèches de chaque côté pour essayer le carousel
                                    sur la page Projets!
                                </p>
                                <h4>Technos</h4>
                                <ul>
                                    <li>React 18</li>
                                    <li>Sass 1.49</li>
                                </ul>
                            </div>
                            <div className="link-ctn">
                                <p className="deployed inactive" >Vous voyez le résultat!</p>
                                <a href="https://github.com/CJLFortunato/Coding-Portfolio" target="_blank" className="github">GitHub</a>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src={ImgDatabase} />
                            <div className="project-card-img-p-ctn">
                                <h3>Fun with Databases</h3>
                                <p>Le but de ce projet était de m'entraîner au maniement d'une base de donnée relationelle et de comprendre comment relier Front-end et Back-end.
                                    WIP.
                                </p>
                                <h4>Technos</h4>
                                <ul>
                                    <li>Angular </li>
                                    <li>NodeJS/ExpressJS</li>
                                    <li>PostGreSQL</li>
                                </ul>
                            </div>
                            <div className="link-ctn">
                                <a href="" target="_blank" className="deployed">Pas encore déployé</a>
                                <a href="https://github.com/CJLFortunato/database-viewer" target="_blank" className="github">GitHub</a>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src={ImgWeather}/>
                            <div className="project-card-img-p-ctn">
                                <h3>Weather</h3>
                                <p>Ce site vous permet de rentrer le nom d'une ville partout dans le monde, et l'API vous retournera le temps qu'il fait dans cette ville en ce moment.</p>
                                <h4>Technos</h4>
                                <ul>
                                    <li>PHP 7.4</li>
                                    <li>API OpenWeather </li>
                                </ul>
                            </div>
                            <div className="link-ctn">
                                <a href="https://weather-php-app.herokuapp.com/" target="_blank" className="deployed">Voir site</a>
                                <a href="https://github.com/CJLFortunato/weather" target="_blank" className="github">GitHub</a>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src={ImgJammming} />
                            <div className="project-card-img-p-ctn">
                                <h3>Jammming</h3>
                                <p>Ce site est un projet Codecademy basé sur l'API du site Spotify.
                                    Il permet à l'utilisateur de chercher des pistes de chansons et de les ajouter à une nouvelle playlist sur leur compte.
                                </p>
                                <h4>Technos</h4>
                                <ul>
                                    <li>React 17</li>
                                    <li>API Spotify</li>
                                </ul>
                            </div>
                            <div className="link-ctn">
                                <a href=" http://react-jammming-music.surge.sh/" target="_blank" className="deployed">Voir site</a>
                                <a href="https://github.com/CJLFortunato/Jammming" target="_blank" className="github">GitHub</a>
                            </div>
                        </div>

                        <div className="project-card">
                            <img src={ImgDice}/>
                            <div className="project-card-img-p-ctn">
                                <h3>Lanceur de dés</h3>
                                <p>Un site simple qui vous permet de lancer des dés, avec un focus sur les jeux de rôle sur table.
                                    Utile si vous avez oublié vos dés ou que vous n'en avez pas assez pour déterminer les dégâts causés par la boule de feu que vous venez de lancer.</p>
                                <h4>Technos</h4>
                                <ul>
                                    <li>HTML 5</li>
                                    <li>CSS 3</li>
                                    <li>JavaScript ES6</li>
                                </ul>
                            </div>
                            <div className="link-ctn">
                                <a href="https://cjlfortunato.github.io/Dice-roller/" target="_blank" className="deployed">Voir site</a>
                                <a href="https://github.com/CJLFortunato/Dice-roller" target="_blank" className="github">GitHub</a>
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