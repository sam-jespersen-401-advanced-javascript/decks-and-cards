import React from 'react';
import PropTypes from 'prop-types';

export default function Deck({ children }) {
  return (
    <>
      {children}
    </>
  );
}
Deck.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
