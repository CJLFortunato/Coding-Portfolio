import { useContext } from 'react';

import Projects from "./sections/Projects";
import School from "./sections/School";
import Work from "./sections/Work";
import { LangContext } from '~/root';
import APP_TEXT from '~/CONSTANTS';

export default function Body () {
  const lang = useContext(LangContext);
  return (
    <article>
      <p className="intro">
        {APP_TEXT[lang].persProf}
      </p>
      <Work />
      <Projects />
      <School />
    </article>
  );
}