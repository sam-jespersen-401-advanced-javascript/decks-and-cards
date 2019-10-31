import React, { Component } from 'react';
import { getCharacters } from '../../../services/hey-arnold-api.js';
import DeckOfCards from '../DeckOfCards.js';
import PropType from 'prop-types';

export default class Characters extends Component {
    static propTypes = {
      count: PropType.number.isRequired
    }

    state = {
      cards: null
    }

    componentDidMount() {
      getCharacters(this.props.count).then(res => {
        this.setState({ cards: res });
      });
    }

    render() {

      return (
        <>
          {this.state.cards && <DeckOfCards items={this.state.cards} />}
        </>
      );
    }
}
