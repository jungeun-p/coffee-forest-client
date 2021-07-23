import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/store';
import axios from 'axios';
import { LOCAL_HOST } from './Lib/constant';

// axios.defaults.baseURL = `${LOCAL_HOST}`;
// axios.defaults.withCredentials = true;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
