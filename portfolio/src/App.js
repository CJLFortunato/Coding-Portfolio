import './App.css';
import './CSS/structure.css';
import Presentation from './Components/Presentation';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Skills from './Components/Skills';
import Projects from './Components/Projects';

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
          <Routes>
            <Route path='/' exact element={<Presentation />} />
            <Route path='/skills' exact element={<Skills />} />
            <Route path='/projects' exact element={<Projects />} />
          </Routes>
        </main>

        <footer>
          <p>Made by Clémence Fortunato.
            <a href="">clemence.fortunato@gmail.com</a>
            <a href="">GitHub</a>
            <a href="">LinkedIn</a>
          </p>
        </footer>

      </div>
    </Router>
  );
}

export default App;
