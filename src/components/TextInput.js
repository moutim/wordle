import React, { useContext, useState } from 'react'
import WordleContext from '../context/WordleContext';

export default function TextInput() {
  const { 
    chances: { attemptNumber, attempts, setAttempts }
  } = useContext(WordleContext);

  const handleValidateInput = ({ target: { value }}) => {
    setAttempts([{ ...attempts[0], [`attempt${attemptNumber}`]: value }])
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
    </div>
  )
}
