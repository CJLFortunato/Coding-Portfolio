import React from "react";
import "./reset.css";
import './App.css';
import { ContactInfo } from "../Components/ContactInfo.js";
import { Presentation } from "../Components/Presentation.js";
import { Projects } from "../Components/Projects";
import { Skills } from "../Components/Skills";
import { Background } from "../Components/Background";

function App() {
  return (
    <div>
      <header>
      <nav>
            <ul>
                <li><a href="#introduction">Introduction</a></li> 
                <li><a href="#background">Background</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul> 
        </nav>
      </header>
      <main>
        <Presentation />
        <Background />
        <Skills />
        <Projects />
        <ContactInfo />
      </main>
      <footer>
        <p>Site built by CJL Fortunato. For more details see <a href="#projects">the Projects section</a>.</p>
      </footer>
    </div>
  );
}

export default App;
