import React, { Component } from 'react';
import { getGifs } from '../../../services/hey-arnold-api';
import Deck from '../Deck';
import PropType from 'prop-types';

export default class Gifs extends Component {

  static propTypes = {
    count: PropType.number.isRequired
  }

  componentDidMount() {
    getGifs(this.props.count).then(res => {
      this.gifArray(res);
    });
  }

  state = {
    gifs: '',
  }

  gifArray = (gifs) => {
    
    let gifArray = gifs.map(({ gifLink }) => (
      <img src={gifLink} key={gifLink} />
    ));
      
    this.setState({ gifs: gifArray });
  }
  render() {
    return (
      <Deck>
        {this.state.gifs}
      </Deck>
    );


  }



}


