import React, { useContext } from 'react'
import ButtonSendWord from '../components/ButtonSendWord';
import Table from '../components/Table';
import TextInput from '../components/TextInput';
import WordleContext from '../context/WordleContext';
import PlayerWon from '../components/PlayerWon';
import PlayerLost from '../components/PlayerLost';
import Header from '../components/Header';

export default function Wordle() {
  const { results: { playerWon, playerLost } } = useContext(WordleContext);
  return (
    <>
      <Header />
      { playerWon && <PlayerWon /> }
      { playerLost && <PlayerLost /> }
      <Table />
      <TextInput />
      <ButtonSendWord />
    </>
  )
}
