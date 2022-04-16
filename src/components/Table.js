import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';
import TableRow from './TableRow';

export default function Table() {
  const { chances: { attempt } } = useContext(WordleContext);
  return (
    <div>
      {
        attempt.map((guess, index) => (
          <TableRow key={ index } />
        )
        )
      }
    </div>
  )
}
