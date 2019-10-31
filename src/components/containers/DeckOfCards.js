import React, { Component } from 'react';
import Card from '../Card';
import Deck from '../Deck';
import { getGifs, getCharacters } from '../../../services/hey-arnold-api.js';


export default class DeckOfCards extends Component {
  state = {
    characters: '',
    gifs: ''
  }

  getData() {
    return Promise.all([
      getCharacters(),
      getGifs()
    ])
      .then(res => {
        return res;
      });
  }

  renderData(arr) {
    const cards = arr[0];
    const gifs = arr[1];
    const renderCards = cards.map(({ _id, name, image }) => (
      <Card
        key={_id}
        _id={_id}
        name={name}
        image={image}
      />
    ));

    const gifArray = gifs.map(({ _id, gifLink }) => (
      <Card
        key={_id}
        _id={_id}
        image={gifLink}
      />
    ));

    this.setState({ gifs: gifArray, cards: renderCards });

  }

  componentDidMount() {
    this.getData().then(res => {
      this.renderData(res);
    });
  }

  render() {
    return (
      <>
        <Deck>
          {this.state.cards}
        </Deck>
        <Deck>
          {this.state.gifs}
        </Deck>
      </>
    );
  }

}
