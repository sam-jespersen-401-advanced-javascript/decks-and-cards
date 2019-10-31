import React from 'react';
import Characters from './containers/Characters';
import Gifs from './containers/Gifs';
import Header from './Header';

export default function App() {
  return (
    <>
      <section>
        <Header />
        <Characters count={12} />
        <Gifs count={12}/>
      </section>
    </>
  );
}
