import React from 'react'
import ButtonSendWord from '../components/ButtonSendWord';
import Table from '../components/Table';
import TextInput from '../components/TextInput';

export default function Wordle() {
  return (
    <>
      <Table />
      <TextInput />
      <ButtonSendWord />
    </>
  )
}
