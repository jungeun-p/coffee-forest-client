import './App.css';
import React, { useEffect } from 'react';
import MainRouter from './Routes/MainRouter';
import { useSelector } from 'react-redux';
// import { actions } from './Store/auth';
import { getAccessToken } from './Hooks/auth';

function App() {
  const { status } = useSelector(state => state.auth);

  useEffect(() => {
    getAccessToken();
  }, [status]);
  return (
    <>
      <MainRouter />
    </>
  );
}

export default App;
