import React, { useState } from 'react';
import WordleContext from './WordleContext';

export default function WordleProvider({ children }) {
  const [attempt, setAttempt] = useState([
    { guess: ''},
    { guess: ''},
    { guess: ''},
    { guess: ''},
    { guess: ''},
    { guess: ''},
  ]);

  const context = {
    chances: {
      attempt,
      setAttempt,
    }
  };
  return (
    <WordleContext.Provider value={ context }>
        { children }
    </WordleContext.Provider>
  )
}
