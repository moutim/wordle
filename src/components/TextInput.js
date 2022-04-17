import React, { useContext, useState } from 'react';
import WordleContext from '../context/WordleContext';
import wordlist from '../data/wordlist';

export default function TextInput() {
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const { 
    chances: { attemptNumber, setAttemptNumber, attempts, setAttempts }
  } = useContext(WordleContext);

  const handleValidateInput = ({ target: { value }}) => {
    if (value.length === 5) {
      setAttempts([{ ...attempts[0], [`attempt${attemptNumber}`]: value }]);
      setButtonDisabled(false);
      return;
    } 
    else {
      setAttempts([{ ...attempts[0], [`attempt${attemptNumber}`]: value }]);
      setButtonDisabled(true);
    } 
  };

  const handleSendWord = () => {
    const doesWordExist = wordlist.some(
      (word) => word.toLowerCase() === attempts[0][`attempt${attemptNumber}`].toLowerCase()
    );
    if (doesWordExist) {
      setAttemptNumber(attemptNumber + 1);
    }
  } 

  return (
    <div>
      <label>
        Digite a palavra aqui
        <input 
          type="text" 
          onChange={ handleValidateInput }
        />
      </label>
      <button 
        disabled={ isButtonDisabled }
        type="button"
        onClick={ handleSendWord }
      >Enviar
      </button>
    </div>
  )
}
