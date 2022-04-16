import React from 'react';
import WordleContext from './WordleContext';

export default function WordleProvider({ children }) {
  const context = {};
  return (
    <WordleContext.Provider value={ context }>
        { children }
    </WordleContext.Provider>
  )
}
