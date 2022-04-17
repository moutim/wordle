import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './TableRow.css';
import WordleContext from '../context/WordleContext';

export default function TableRow({ guess }) {
  const { 
    word,
    verifications: { verifyWord, setVerifyWord },
    // chances: { attempts, attemptNumber },
  } = useContext(WordleContext);

  const verifyLetter = () => {
    const arrayWord = word.split('');
    const wordIsCorrect = guess.every(
      (letter, index) => letter.toLowerCase() === arrayWord[index].toLowerCase()
    );
    console.log(wordIsCorrect);
    console.log(word);
    guess.forEach((letter, index) => {
      if (letter.toLowerCase() === arrayWord[index].toLowerCase()) {
        console.log('foi');
      }
    });
    setVerifyWord(false);
  }
  return (
    <div className="containerLetters">
      <div className={ verifyWord ? verifyLetter() : 'boxLetter'}> <span> { guess[0] } </span> </div>
      <div className="boxLetter"> <span> { guess[1] } </span> </div>
      <div className="boxLetter"> <span> { guess[2] } </span> </div>
      <div className="boxLetter"> <span> { guess[3] } </span> </div>
      <div className="boxLetter"> <span> { guess[4] } </span> </div>
    </div>
  )
}

TableRow.propTypes = {
  guess: PropTypes.arrayOf(PropTypes.string).isRequired,
};
