import React, { Component } from 'react';
import Card from '../Card';
import Deck from '../Deck';
import { characters } from '../../content.json';


const cards = characters.map(({ _id, name, image }) => (
  <Card
    key={_id}
    _id={_id}
    name={name}
    image={image}
  />
)
);
console.log(cards);


export default class DeckOfCards extends Component {
  render() {
    return (
      <Deck>
        {cards}
      </Deck>
    );
  }

}
