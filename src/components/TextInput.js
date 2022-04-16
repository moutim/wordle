import React, { useContext } from 'react'
import WordleContext from '../context/WordleContext';

export default function TextInput() {
  const { chances: { setAttempt, attempt } } = useContext(WordleContext);

  const handleValidateInput = ({ target: { value }}) => {
    if (value.length === 5) {
      setAttempt([{ guess: value, ...attempt }])
    }
  }
  return (
    <div>
      <label>
        Digite a palavra aqui
        <input type="text" onChange={ handleValidateInput } />
      </label>
    </div>
  )
}
