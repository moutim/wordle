import React, { useContext, useEffect, useState } from 'react';
import WordleContext from '../context/WordleContext';
import wordlist from '../data/wordlist';

export default function ButtonSendWord() {
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const { chances: { attemptNumber, attempts, setAttemptNumber } } = useContext(WordleContext);
  const currentGuess = attempts[0][`attempt${attemptNumber}`];

  useEffect(() => {
    const checkWordSize = () => {
      if (currentGuess.length === 5) {
        setButtonDisabled(false);
      } else setButtonDisabled(true);
    };
    checkWordSize();
  }, [currentGuess])

  const handleSendWord = () => {
    const doesWordExist = wordlist.some(
      (word) => word.toLowerCase() === attempts[0][`attempt${attemptNumber}`].toLowerCase()
    );
    if (doesWordExist) {
      setAttemptNumber(attemptNumber + 1);
    }
  }

  return (
    <button 
      type="button" 
      onClick={ handleSendWord }
      disabled={ isButtonDisabled }
    >Enviar
    </button>
  )
}
