import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';

export default function PlaterLost() {
  const { word } = useContext(WordleContext);
  return (
    <div>
      <h2>Não foi dessa vez...</h2>
      <p>{`A palavra da vez era ${word}`}</p>
      <button>Jogar novo jogo</button>
    </div>
  )
}
