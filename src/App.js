import './App.css';
import React, { useEffect } from 'react';
// import { applyMiddleware, createStore } from "redux";
import MainRouter from './Routes/MainRouter';
import Cookies from 'universal-cookie/es6';
import { useSelector } from 'react-redux';
import axios from 'axios';

// export function getAccessToken() {
const cookies = new Cookies();
const refresh_token = cookies.get('refreshToken');
if (refresh_token) {
  console.log('alive RT');
}

// }
function App() {
  // // const { tokenInfo } = useSelector(state => state.token);
  // useEffect(() => {
  //   getAccessToken();
  // });
  return (
    <>
      <MainRouter />
    </>
  );
}

export default App;
