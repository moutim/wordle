import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';
import './PlayerFeedback.css';

export default function PlayerWon() {
  const { word, chances: { attemptNumber } } = useContext(WordleContext);

  const feedbackMessages = () => {
    if (attemptNumber < 3) return 'Excelente!';
    if (attemptNumber > 3 && attemptNumber < 5) return 'Muito bom!';
    return 'Foi por pouco!'
  }

  return (
    <div className="playerWon">
      <h2>Você acertou!</h2>
      <p>{`A palavra da vez era ${word}`}</p>
      <p>{`Você usou ${attemptNumber - 1} de 6 tentativas`}</p>
      <p>{ feedbackMessages() }</p>
    </div>
  )
}
