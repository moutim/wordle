import React, { useState } from 'react';
import wordlist from '../data/wordlist';
import WordleContext from './WordleContext';

export default function WordleProvider({ children }) {
  const randomNumber = Math.floor(Math.random() * wordlist.length);
  const [word] = useState(wordlist[randomNumber]);
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
    word,
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
