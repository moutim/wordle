import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';
import './PlayerFeedback.css';

export default function PlaterLost() {
  const { word } = useContext(WordleContext);
  return (
    <div className="playerLost">
      <h2>Não foi dessa vez...</h2>
      <p>{`A palavra da vez era ${word}`}</p>
      <button>Jogar novo jogo</button>
    </div>
  )
}
