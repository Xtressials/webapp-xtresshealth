import React from 'react';
import './app.scss';
import Router from './Router';
import AppContext, { useAppContext } from './context/app';

const App = () => {
  return (
    <AppContext.Provider value={useAppContext()}>
      <Router />
    </AppContext.Provider>
  );
};

export default App;
