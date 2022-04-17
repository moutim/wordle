import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';

export default function PlayerWon() {
  const { word, chances: { attemptNumber } } = useContext(WordleContext);
  return (
    <div>
      <h2>Você acertou!</h2>
      <p>{`A palavra da vez era ${word}`}</p>
      <p>{`Você usou ${attemptNumber} de 6 tentativas`}</p>
    </div>
  )
}
