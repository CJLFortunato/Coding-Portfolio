import './App.css';
import './CSS/structure.css';
import './CSS/colors.css';
import Presentation from './Components/Presentation';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Wave1 from './Ressources/wave1.svg';
import Wave2 from './Ressources/wave2.svg';
import Sun from './Ressources/Sun.png';

function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <h4>Clémence Fortunato</h4>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <div className="bg">
          <img src={Sun} className="sun"></img>
          <img src={Wave2} className="wave2" width="1920" height="1080"></img>
          <img src={Wave1} className="wave1" width="1920" height="1080"></img>
          </div>

          <Routes>
            <Route path='/' exact element={<Presentation />} />
            <Route path='/skills' exact element={<Skills />} />
            <Route path='/projects' exact element={<Projects />} />
          </Routes>
        </main>

        <footer>
          <p> Contactez moi!</p>
          <a href="mailto:clemence.fortunato@gmail.com">clemence.fortunato@gmail.com</a>
          <a href="https://github.com/CJLFortunato/">GitHub</a>
          <a href="https://www.linkedin.com/in/clemencefortunato/">LinkedIn</a>
        </footer>

      </div>
    </Router>
  );
}

export default App;
