import { useContext } from 'react';

import { LangContext } from '~/root';
import APP_TEXT from '~/CONSTANTS';
import Project from '../Project';

export default function Projects () {
  const lang = useContext(LangContext);
  return (
    <section className="body-section">
      <h2>{APP_TEXT[lang].projects.title}</h2>
      <hr />
      {APP_TEXT[lang].projects.content.map((project) =>(
        <Project project={project} />
      ))}
    </section>
  );
}