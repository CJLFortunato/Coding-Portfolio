import { useContext } from 'react';

import { LangContext } from '~/root';
import APP_TEXT from '~/CONSTANTS';
import Item from '../Item';

export default function School () {
  const lang = useContext(LangContext);
  return (
    <section className="body-section">
      <h2>{APP_TEXT[lang].school.title}</h2>
      <hr />
      {APP_TEXT[lang].school.content.map((item) =>(
        <Item item={item} key={item.period} />
      ))}
    </section>
  );
}