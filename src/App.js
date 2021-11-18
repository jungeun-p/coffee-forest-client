import './App.css';
import React, { useEffect } from 'react';
import MainRouter from './Routes/MainRouter';
import { useSelector } from 'react-redux';
import { getAccessToken } from './Hooks/auth';

function App() {
  const status = useSelector(state => state.schedule.errorMessage);
  useEffect(() => {
    getAccessToken();
  }, []);
  return (
    <>
      <MainRouter />
    </>
  );
}

export default App;
