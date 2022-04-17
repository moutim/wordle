import React, { useContext, useState } from 'react'
import WordleContext from '../context/WordleContext';

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
  }

  const handleSendWord = () => setAttemptNumber(attemptNumber + 1);

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
