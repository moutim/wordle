import React from 'react';
import PropTypes from 'prop-types';
import './TableRow.css';

export default function TableRow({ guess }) {
  return (
    <div className="containerLetters">
      <div className="boxLetter"> <span> { guess[0] } </span> </div>
      <div className="boxLetter"> <span> { guess[1] } </span> </div>
      <div className="boxLetter"> <span> { guess[2] } </span> </div>
      <div className="boxLetter"> <span> { guess[3] } </span> </div>
      <div className="boxLetter"> <span> { guess[4] } </span> </div>
    </div>
  )
}

TableRow.propTypes = {
  guess: PropTypes.arrayOf(PropTypes.string).isRequired,
};
