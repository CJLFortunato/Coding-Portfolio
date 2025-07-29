import { useContext } from 'react';

import { LangContext } from '~/root';
import APP_TEXT from '~/CONSTANTS';
import Item from '../Item';

export default function Work () {
  const lang = useContext(LangContext);
  return (
    <section className="body-section">
      <h2>{APP_TEXT[lang].work.title}</h2>
      <hr />
      {APP_TEXT[lang].work.content.map((item) =>(
        <Item item={item} key={item.period} />
      ))}
    </section>
  );
}