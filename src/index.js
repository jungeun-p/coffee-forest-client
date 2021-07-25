import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/store';
import axios from 'axios';
import { URL } from './Lib/constant';

// axios.defaults.baseURL = `${URL}`;
// axios.defaults.withCredentials = true;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
