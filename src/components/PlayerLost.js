import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';
import './PlayerFeedback.css';

export default function PlaterLost() {
  const { word } = useContext(WordleContext);

  const handleNewGame = () => window.location.reload();

  return (
    <div className="playerLost">
      <h2>Não foi dessa vez...</h2>
      <p>A palavra da vez era <span className="feedbackWord">{ word }</span> </p>
      <button onClick={ handleNewGame } className="buttonNewGame">Jogar Novo Jogo</button>
    </div>
  )
}
