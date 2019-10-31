import React, { Component } from 'react';
import Card from '../Card';
import Deck from '../Deck';
import { characters, gifs } from '../../content.json';


const cards = characters.map(({ _id, name, image }) => (
  <Card
    key={_id}
    _id={_id}
    name={name}
    image={image}
  />
));

const gifArray = gifs.map(({ _id, image }) => (
  <Card
    key={_id}
    _id={_id}
    image={image}
  />
));

export default class DeckOfCards extends Component {
  render() {
    return (
      <>
        <Deck>
          {cards}
        </Deck>
        <Deck>
          {gifArray}
        </Deck>
      </>
    );
  }

}
