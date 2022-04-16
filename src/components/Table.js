import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';
import TableRow from './TableRow';

export default function Table() {
  const { chances: { attempts  } } = useContext(WordleContext);
  return (
    <>
      {
        attempts.map((attempt) => (
          <div key="attempts">
            <TableRow guess={ attempt.attempt1.split('') } />
            <TableRow guess={ attempt.attempt2.split('') } />
            <TableRow guess={ attempt.attempt3.split('') } />
            <TableRow guess={ attempt.attempt4.split('') } />
            <TableRow guess={ attempt.attempt5.split('') } />
            <TableRow guess={ attempt.attempt6.split('') } />
          </div>
        ))
      }
    </>
  )
}
