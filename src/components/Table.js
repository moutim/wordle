import React, { useContext } from 'react';
import WordleContext from '../context/WordleContext';
import TableRow from './TableRow';

export default function Table() {
  const { chances: { attempts  }, verifications: { verifyAttempt } } = useContext(WordleContext);
  return (
    <>
      {
        attempts.map((attempt) => (
          <div key="attempts">
            <TableRow verify={ verifyAttempt.attempt1 } guess={ attempt.attempt1.split('') } />
            <TableRow verify={ verifyAttempt.attempt2 } guess={ attempt.attempt2.split('') } />
            <TableRow verify={ verifyAttempt.attempt3 } guess={ attempt.attempt3.split('') } />
            <TableRow verify={ verifyAttempt.attempt4 } guess={ attempt.attempt4.split('') } />
            <TableRow verify={ verifyAttempt.attempt5 } guess={ attempt.attempt5.split('') } />
            <TableRow verify={ verifyAttempt.attempt6 } guess={ attempt.attempt6.split('') } />
          </div>
        ))
      }
    </>
  )
}
