import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';
import './HowToPlay.css';

export default function HowToPlay() {
  const { instructions: { setShowHowToPlay } } = useContext(WordleContext);

  return (
    <div className="containerHowToPlay">
      <button type="button" onClick={ () => setShowHowToPlay(false) }>X</button>
      <h2>Como jogar?</h2>
      <p>
        A cada novo jogo, uma nova palavra aparecerá no WORDAY para você adivinhar.
        Você terá 6 tentativas. Cada uma delas deve ser uma palavra que exista.
        Acentos e cedilha são ignorados, tanto nas tentativas, quanto na resposta.
        Após chutar, as letras mudarão para indicar o quão perto você está da resposta.
      </p>
      <ul>
        <li>Se uma letra ficar verde, ela está presente na palavra e na posição correta.</li>
        <li>Se uma letra ficar amarela, ela está presente na palavra, mas na posição errada.</li>
        <li>Se uma letra ficar vermelha, ela NÃO está na palavra.</li>
      </ul>
      <div className="containerLetters">
        <div className="boxLetter letterIsInTheRightPlace">T</div>
        <div className="boxLetter">E</div>
        <div className="boxLetter letterExistInWord">S</div>
        <div className="boxLetter">T</div>
        <div className="boxLetter letterNotExistInWord">E</div>
      </div>
      <p>Desenvolvido por <a href="https://www.linkedin.com/in/vitormoutim/">Vitor Moutim</a></p>
    </div>
  )
}
