import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Lefter () {
  return (
    <aside>
      <h1>Clémence Fortunato</h1>
      <h2>Développeur Full Stack</h2>
      <hr />
      <p>Conception et réalisation d'applications web full stack</p>
      <div className='link-ctn'>
        <a href="https://github.com/CJLFortunato" title="https://github.com/CJLFortunato">
          <FontAwesomeIcon icon={faGithub} className="icon-link" />
        </a>
        <a href="https://linkedin.com/in/clemencefortunato" title="https://linkedin.com/in/clemencefortunato">
          <FontAwesomeIcon icon={faLinkedin} className="icon-link" />
        </a>
      </div>
      <div className='link-ctn'>
        <a href="mailto:clemence.fortunato@gmail.com" title="clemence.fortunato@gmail.com" className='contact-btn'>
          <button>Contactez-moi</button></a>
        <a href="CV_fr_light.pdf" download="fortunato_clemence_CV.pdf" target="_blank" className='contact-btn'><button>CV</button></a>
      </div>
    </aside>
  );
}