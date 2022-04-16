import React, { useState } from 'react';
import WordleContext from './WordleContext';

export default function WordleProvider({ children }) {
  const [attemptNumber, setAttemptNumber] = useState(1);
  const [attempts, setAttempts] = useState([
    {
      attempt1: '',
      attempt2: '',
      attempt3: '',
      attempt4: '',
      attempt5: '',
      attempt6: '',
    }
  ]);

  const context = {
    chances: {
      attemptNumber,
      setAttemptNumber,
      attempts,
      setAttempts,
    }
  };
  return (
    <WordleContext.Provider value={ context }>
      { children }
    </WordleContext.Provider>
  )
}
