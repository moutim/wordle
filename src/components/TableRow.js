import React from 'react';
import PropTypes from 'prop-types';

export default function TableRow({ guess }) {
  console.log(guess);
  return (
    <div>
      <div> <span> { guess[0] } </span> </div>
      <div> <span> { guess[1] } </span> </div>
      <div> <span> { guess[2] } </span> </div>
      <div> <span> { guess[3] } </span> </div>
      <div> <span> { guess[4] } </span> </div>
    </div>
  )
}

TableRow.propTypes = {
  guess: PropTypes.string.isRequired,
};
