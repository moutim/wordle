import React, { useContext, useEffect } from 'react';
import WordleContext from '../context/WordleContext';
import { row1, row2, row3, keyboardLetters } from '../data/keyboardLetters';
import wordlist from '../data/wordlist';
import './Keyboard.css';


export default function Keyboard() {
  const {
    word,
    chances: { attemptNumber, attempts, setAttempts, setAttemptNumber },
    verifications: { verifyAttempt, setVerifyAttempt },
    keyboard,
  } = useContext(WordleContext);
  

  useEffect(() => {
    const colorKeyboard = () => {
      const currVerifyAttempt = verifyAttempt[`attempt${attemptNumber - 1}`];
      const currGuess = attempts[0][`attempt${attemptNumber - 1}`];
      if (currVerifyAttempt) {
        const arrGuess = currGuess.toLowerCase().split('');
        const arrWord = word.toLowerCase().split('');
        const lettersNotExist = arrGuess.filter((letter, index) => {
          const doesWordContainLetter = arrWord.includes(letter);
          return ( doesWordContainLetter ? false : true );
        });
        const lettersRight = arrWord.filter((letter, index) => letter === arrGuess[index]);
        const lettersExistInWord = arrGuess.filter((letter, index) => {
          const doesWordContainLetter = arrWord.includes(letter);
          return ( doesWordContainLetter ? true : false );
        });
        const arrRight = [...keyboard.lettersInRightPlace, ...lettersRight];
        const arrNotExist = [...keyboard.lettersThatNotExist, ...lettersNotExist];
        const arrExist = [...keyboard.lettersThatExist, ...lettersExistInWord];
        keyboard.setLettersRight(arrRight.filter((letter, index) => arrRight.indexOf(letter) === index));
        keyboard.setLettersNotExist(arrNotExist.filter((letter, index) => arrNotExist.indexOf(letter) === index));
        keyboard.setLettersExist(arrExist.filter((letter, index) => arrExist.indexOf(letter) === index));
      }
    };
    colorKeyboard();
  }, [attemptNumber, attempts, verifyAttempt, word]);

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

  const handlePaintKeyboard = (letter) => {
    const { lettersThatNotExist, lettersThatExist, lettersInRightPlace } = keyboard;
    if (lettersThatNotExist.length > 0 || lettersThatExist.length > 0 || lettersInRightPlace.length > 0) {
      if (lettersThatNotExist.includes(letter.toLowerCase())) return 'letterNotExistInWord';
      if (lettersInRightPlace.includes(letter.toLowerCase())) return 'letterIsInTheRightPlace';
      if (lettersThatExist.includes(letter.toLowerCase())) return 'letterExistInWord';
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
                  className={ handlePaintKeyboard(letter) }
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
