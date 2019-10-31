import React from 'react';
import { gifs } from '../content.json';
import DeckOfCards from './containers/DeckOfCards';

export default function App() {
  return (
    <>
      <section>
        <header>
          <h2>Characters</h2>
        </header>
        <DeckOfCards />
      </section>
      <section>
        {gifs.map(({ _id, image }) => (
          <div key={_id}>
            <header><h3>{_id}</h3></header>
            <figure>
              <img src={image} alt={_id} />
            </figure>
          </div>
        ))}
      </section>
    </>
  );
}
