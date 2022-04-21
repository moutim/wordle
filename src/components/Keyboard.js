import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';
import { row1, row2, row3, keyboardLetters } from '../data/keyboardLetters';
import wordlist from '../data/wordlist';
import './Keyboard.css';


export default function Keyboard() {
  const { 
    chances: { attemptNumber, attempts, setAttempts, setAttemptNumber },
    verifications: { verifyAttempt, setVerifyAttempt },
  } = useContext(WordleContext);

  const handleSendWord = () => {
    const doesWordExist = wordlist.some(
      (word) => word.toLowerCase() === attempts[0][`attempt${attemptNumber}`].toLowerCase()
    );
    if (doesWordExist && attemptNumber < 6) {
      setAttemptNumber(attemptNumber + 1);
      setVerifyAttempt({ ...verifyAttempt, [`attempt${attemptNumber}`]: true });
    } else setVerifyAttempt({ ...verifyAttempt, [`attempt${attemptNumber}`]: true });
  }

  const handleKeyPress = ({ key }) => {
    const currGuess = attempts[0][`attempt${attemptNumber}`];
    const letters = [...row1, ...row2, ...row3];
    const isValidKey = letters.some(
      (letter) => letter.toLowerCase() === key.toLowerCase()
    );
    if (key === 'Backspace') {
      setAttempts([{ 
        ...attempts[0],
        [`attempt${attemptNumber}`]: currGuess.substr(0, currGuess.length - 1)
      }]);
      return
    }
    if (key === 'Enter' && currGuess.length === 5) return handleSendWord();
    if (isValidKey && currGuess.length < 5) {
      setAttempts([{ 
        ...attempts[0],
        [`attempt${attemptNumber}`]: `${currGuess}${key}`
      }]);
    }
  }

  return (
    <div className="containerKeyboard">
      {
        keyboardLetters.map((row, index) => (
          <div key={ index } className="keyboard">
            {
              row.map((letter) => (
                <button
                  key={ letter }
                  value={ letter }
                  type="button"
                  autoFocus
                  onKeyDown={ handleKeyPress }
                >
                  { letter }
                </button>
              ))
            }
          </div>
        )
        )
      }
    </div>
  )
}
