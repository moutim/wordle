import React, { useContext } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import WordleContext from '../context/WordleContext';
import questionMark from '../images/questionMark.png';
import './Header.css';

export default function Header() {
  const { lighting: { darkMode, setDarkMode }, instructions: { setShowHowToPlay } } = useContext(WordleContext);
  const handleDarkmode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkmode', !darkMode);
  }
  return (
    <header>
      <img 
        src={ questionMark } 
        alt="Ilustração de uma lâmpada com um ponto de interrogação dentro."
        onClick={ () => setShowHowToPlay(true) }
      />
      <h1>WORD<span>AY</span></h1>
      <DarkModeToggle
        onChange={ handleDarkmode }
        checked={ darkMode }
        size={ 60 }
        speed={ 1.0 }
      />
    </header>
  )
}
