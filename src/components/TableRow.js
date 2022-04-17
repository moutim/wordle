import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './TableRow.css';
import WordleContext from '../context/WordleContext';

export default function TableRow({ guess, verify }) {
  const { word } = useContext(WordleContext);

  console.log(word);
  const verifyLetter = (position) => {
    const arrayWord = word.split('');
    const wordIsCorrect = guess.every(
      (letter, index) => letter.toLowerCase() === arrayWord[index].toLowerCase()
    );
    const letterIsInTheRightPlace = arrayWord[position].toLowerCase() === guess[position].toLowerCase();
    const letterExistInWord = arrayWord.some(
      (letter) => letter.toLowerCase() === guess[position].toLowerCase()
    );
    
    if(wordIsCorrect) return 'boxLetter wordIsCorrect';
    if(letterIsInTheRightPlace) return 'boxLetter letterIsInTheRightPlace';
    if(letterExistInWord) return 'boxLetter letterExistInWord';
    return 'boxLetter letterNotExistInWord';
  }

  return (
    <div className="containerLetters">
      <div className={ verify ? verifyLetter(0) : 'boxLetter'} > <span> { guess[0] } </span> </div>
      <div className={ verify ? verifyLetter(1) : 'boxLetter'} > <span> { guess[1] } </span> </div>
      <div className={ verify ? verifyLetter(2) : 'boxLetter'} > <span> { guess[2] } </span> </div>
      <div className={ verify ? verifyLetter(3) : 'boxLetter'} > <span> { guess[3] } </span> </div>
      <div className={ verify ? verifyLetter(4) : 'boxLetter'} > <span> { guess[4] } </span> </div>
    </div>
  )
}

TableRow.propTypes = {
  guess: PropTypes.arrayOf(PropTypes.string).isRequired,
};
