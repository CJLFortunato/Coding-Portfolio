import React from 'react';
import { Link } from 'react-router-dom'


function Presentation() {
    return ( 
        <div className="presentation">
            <h1>Hello World</h1>
            <div className="cards-ctn">
                <div className='card'>
                    <h3>Salutations!</h3>                          
                    je m'appelle Clémence Fortunato, j'ai 27 ans et je cherche à me reconvertir dans le développement 
                    web. <br /><br />
                    Actuellement étudiante à la 3W Academy, je suis <strong>à la recherche d'une entreprise</strong> pour m'acueillir dans le cadre 
                    d'un <strong>contrat d'apprentissage ou de professionalisation sur 12 mois</strong>, avec un rythme de <strong>3 semaines en entreprise, 1 semaine de formation</strong>.
                    <br /><br />
                    <strong>Je suis éligible à la Prime d'aide à l'embauche de 8000€.</strong>
                </div>
                <div className='card'>
                <h3>Formations</h3>
                <ul>
                    <li>
                        <a href="https://3wa.fr/formations/formation-developpeur-web/developpeur-full-stack-react-symfony-1-an-alternance/">
                            Mars 2022 -&gt; Mars 2023 - Formation Full Stack Développeur</a> 
                        <p>3W Academy - RNCP niveau 5 /Bac +2</p>
                        <ul>
                            <li>- HTML / CSS / JavaScript / PHP / SQL</li>
                            <li>- React ou Angular</li>
                            <li>- Symfony (PHP) ou NodeJS ou Spring (JAVA)</li>
                            <li>- MongoDB</li>
                        </ul>
                    </li>
               
                    <li>
                    <a href="https://www.codecademy.com/learn/paths/front-end-engineer-career-path">Juin 2021 -&gt; Octobre 2021 - Front End Enginner Career Path Certification</a>
                        <p>Codecademy - Certification en ligne</p>
                        <ul>
                            <li>- HTML / CSS / JavaScript</li>
                            <li>- React et Redux</li>
                        </ul>
                    </li>
                
                    <li>
                        Octobre 2013 -&gt; Juin 2016 - Bachelor Concepteur Jeu Vidéo 3D
                        <p>LISAA - RNCP niveau 6 /Bac +3/4</p>
                        <ul>
                            <li>- Programmation C# Unity</li>
                            <li>- Modélisation 3D</li>
                            <li>- Design Visuel</li>
                        </ul>
                    </li>
               
                    <li>
                        2012 - Baccalauréat S, mention Bien
                        <p>Lycée St Marc, Lyon</p>
                    </li>
                </ul>
                </div>
                <div className='card'>
                <h3>Expériences professionelles</h3>
                <ul>
                <li>
                        Juin 2021 -&gt; Avril 2022 - Projets personels
                        <ul>
                            <li><Link to="/projects" id="link">Voir la page projets</Link></li>
                         
                        </ul>
                    </li>
                    <li>
                        Juillet 2016 -&gt; Décembre 2016 - Level designer
                        <p>Stage - Eden Games, Lyon</p>
                        <ul>
                            <li>- J'ai créé et modifié plus de 20 niveaux</li>
                            <li>- J'ai produit plusieurs concepts pour de futurs projets</li>
                            <li>- J'ai maintenu la documentation de production</li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </div>
     );
}

export default Presentation;