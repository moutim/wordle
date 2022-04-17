import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';

export default function TextInput() {
  const { 
    chances: { attemptNumber, attempts, setAttempts }
  } = useContext(WordleContext);
  const currentGuess = attempts[0][`attempt${attemptNumber}`];

  const handleValidateInput = ({ target: { value }}) => {
    if (value.length === 5) {
      setAttempts([{ ...attempts[0], [`attempt${attemptNumber}`]: value }]);
    } else {
      setAttempts([{ ...attempts[0], [`attempt${attemptNumber}`]: value }]);
    } 
  };

  

  return (
    <div>
      <label>
        Digite a palavra aqui
        <input 
          type="text" 
          onChange={ handleValidateInput }
          value={ currentGuess }
        />
      </label>
    </div>
  )
}
