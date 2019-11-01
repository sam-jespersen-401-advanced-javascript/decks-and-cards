import React from 'react';
import Card from './Card';
import Deck from './Deck';
import PropType from 'prop-types';


const DeckOfCards = ({ items }) => {

  const renderCards = items.map(({ _id, name, image }) => (
    <Card
      key={_id}
      _id={_id}
      name={name}
      image={image}
    />
  ));

  // const gifArray = gifs.map(({ _id, gifLink }) => (
  //   <Card
  //     key={_id}
  //     _id={_id}
  //     image={gifLink}
  //   />
  // ));

  // this.setState({ gifs: gifArray, cards: renderCards });

  // }


  return (
    <Deck>
      {renderCards}
    </Deck>
  );
};

DeckOfCards.propTypes = {
  items: PropType.array.isRequired
};



export default DeckOfCards;
