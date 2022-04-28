import React, { useContext } from 'react'
import ButtonSendWord from '../components/ButtonSendWord';
import Table from '../components/Table';
import TextInput from '../components/TextInput';
import WordleContext from '../context/WordleContext';
import PlayerWon from '../components/PlayerWon';
import PlayerLost from '../components/PlayerLost';
import Header from '../components/Header';
import './Wordle.css';
import Keyboard from '../components/Keyboard';

export default function Wordle() {
  const { results: { playerWon, playerLost }, lighting: { darkMode } } = useContext(WordleContext);
  return (
    <div className={ darkMode ? 'darkmode' : 'darkmodeLeave'}>
      <Header />
      <main>
        { playerWon && <PlayerWon /> }
        { playerLost && <PlayerLost /> }
        <Table />
        <div className="containerInteractive">
          <TextInput />
          <ButtonSendWord />
        </div>
        <Keyboard />
      </main>
    </div>
  )
}
