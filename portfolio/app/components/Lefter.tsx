import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { LangContext } from '~/root';
import APP_TEXT from '~/CONSTANTS';

export default function Lefter ({ setLang }: { setLang: Function }) {
  const lang = useContext(LangContext);
  return (
    <aside>
      <div>
        <button onClick={() => setLang('fra')}>Fra</button>
        <button onClick={() => setLang('eng')}>Eng</button>
      </div>
      <div>
        <h1>Clémence Fortunato</h1>
        <h2>{APP_TEXT[lang].lefter.jobTitle}</h2>
        <hr />
        <p>{APP_TEXT[lang].lefter.summary}</p>
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
            <button>{APP_TEXT[lang].lefter.contactBtn}</button></a>
          <a href="CV_fr_light.pdf" download="fortunato_clemence_CV.pdf" target="_blank" className='contact-btn'><button>CV</button></a>
        </div>
      </div>
    </aside>
  );
}