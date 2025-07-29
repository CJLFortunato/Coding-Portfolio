import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ReactCountryFlag from "react-country-flag"

import { LangContext } from '~/root';
import APP_TEXT from '~/CONSTANTS';

export default function Lefter ({ setLang }: { setLang: Function }) {
  const lang = useContext(LangContext);
  return (
    <aside>
      <div className="lang-ctn">
        <button onClick={() => setLang('fra')}>
          <ReactCountryFlag
            countryCode="FR"
            svg
            style={{
                width: '1.5rem',
                height: '1.5rem',
                marginRight: '5px',
                borderBottom: lang === 'fra' ? '1px solid rgb(255,138,117)' : 'none',
            }}
            title="Français"
          />
        </button>
        <button onClick={() => setLang('eng')}>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
                width: '1.5rem',
                height: '1.5rem',
                borderBottom: lang === 'eng' ? '1px solid rgb(255,138,117)' : 'none',
            }}
            title="English"
          />
        </button>
      </div>
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
    </aside>
  );
}