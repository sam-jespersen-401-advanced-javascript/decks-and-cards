import React from 'react';
import Characters from './containers/Characters';
import Gifs from './containers/Gifs';

export default function App() {
  return (
    <>
      <section>
        <header>
          <h2>Characters</h2>
        </header>
        <Characters count={12} />
        <Gifs count={12}/>
      </section>
    </>
  );
}
