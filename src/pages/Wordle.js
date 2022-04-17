import React, { useContext } from 'react'
import ButtonSendWord from '../components/ButtonSendWord';
import Table from '../components/Table';
import TextInput from '../components/TextInput';
import WordleContext from '../context/WordleContext';
import PlayerWon from '../components/PlayerWon';

export default function Wordle() {
  const { results: { playerWon } } = useContext(WordleContext);
  return (
    <>
      { playerWon && <PlayerWon />}
      <Table />
      <TextInput />
      <ButtonSendWord />
    </>
  )
}
