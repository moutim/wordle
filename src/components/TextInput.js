import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';
import './TextInput.css';

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
    <div className="containerInput">
      <input
        autoFocus
        placeholder="Digite aqui seu palpite"
        type="text" 
        onChange={ handleValidateInput }
        value={ currentGuess }
      />
    </div>
  )
}
