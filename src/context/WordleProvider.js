import React, { useState } from 'react';
import wordlist from '../data/wordlist';
import WordleContext from './WordleContext';

export default function WordleProvider({ children }) {
  const randomNumber = Math.floor(Math.random() * wordlist.length);
  const [word] = useState(wordlist[randomNumber]);
  const [attemptNumber, setAttemptNumber] = useState(1);
  const [playerWon, setPlayerWon] = useState(false);
  const [playerLost, setPlayerLost] = useState(false);
  const [verifyAttempt, setVerifyAttempt] = useState({
    attempt1: false,
    attempt2: false,
    attempt3: false,
    attempt4: false,
    attempt5: false,
    attempt6: false,
  });
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
  const [lettersThatNotExist, setLettersNotExist] = useState([]);
  const [lettersThatExist, setLettersExist] = useState([]);
  const [lettersInRightPlace, setLettersRight] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const context = {
    word,
    lighting: {
      darkMode,
      setDarkMode,
    },
    keyboard: {
      lettersThatNotExist,
      setLettersNotExist,
      lettersThatExist,
      setLettersExist,
      lettersInRightPlace,
      setLettersRight,
    },
    results: {
      playerWon,
      setPlayerWon,
      playerLost,
      setPlayerLost,
    },
    verifications: {
      verifyAttempt,
      setVerifyAttempt,
    },
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
