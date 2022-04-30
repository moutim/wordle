import React, { useContext, useEffect } from 'react'
import ButtonSendWord from '../components/ButtonSendWord';
import Table from '../components/Table';
import TextInput from '../components/TextInput';
import WordleContext from '../context/WordleContext';
import PlayerWon from '../components/PlayerWon';
import PlayerLost from '../components/PlayerLost';
import Header from '../components/Header';
import './Wordle.css';
import Keyboard from '../components/Keyboard';
import HowToPlay from '../components/HowToPlay';

export default function Wordle() {
  const { 
    results: { playerWon, playerLost },
    lighting: { darkMode, setDarkMode },
    instructions: { showHowToPlay },
  } = useContext(WordleContext);

  useEffect(() => {
    const verifyDarkmode = () => {
      const storageDarkmode = JSON.parse(localStorage.getItem('darkmode')); 
      if (storageDarkmode === true) setDarkMode(true)
      else setDarkMode(false);
    };
    verifyDarkmode();
  }, [setDarkMode]);

  return (
    <div className={ darkMode ? 'darkmode' : 'darkmodeLeave'}>
      { showHowToPlay && <HowToPlay /> }
      <Header />
      <main>
        { playerWon && <PlayerWon /> }
        { playerLost && <PlayerLost /> }
        <div className="containerWords">
          <Table />
          <div className="containerInteractive">
            <TextInput />
            <ButtonSendWord />
          </div>
        </div>
        <Keyboard />
      </main>
    </div>
  )
}
