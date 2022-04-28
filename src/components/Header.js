import React, { useContext } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import WordleContext from '../context/WordleContext';
import questionMark from '../images/questionMark.png';
import './Header.css';

export default function Header() {
  const { lighting: { darkMode, setDarkMode } } = useContext(WordleContext);
  return (
    <header>
      <img 
        src={ questionMark } 
        alt="Ilustração de uma lâmpada com um ponto de interrogação dentro." 
      />
      <h1>WORD<span>AY</span></h1>
      <DarkModeToggle
        onChange={ () => setDarkMode(!darkMode) }
        checked={ darkMode }
        size={ 50 }
        speed={ 1.0 }
      />
    </header>
  )
}
