import React from 'react';
import PropTypes from 'prop-types';

export default function TableRow({ guess }) {
  return (
    <div>
      {
        guess.map(({ letter }) => (
          <div> <span> { letter } </span> </div>
        ))
      }
    </div>
  )
}

TableRow.propTypes = {
  guess: PropTypes.arrayOf(PropTypes.string),
};

TableRow.defaultProps = {
  guess: ['', '', '', '', '']
};
