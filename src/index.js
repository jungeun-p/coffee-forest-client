import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './Store/store';
import { PersistGate } from 'redux-persist/integration/react';
// import axios from 'axios';
// import { URL } from './Lib/constant';

// axios.defaults.baseURL = `${URL}`;
// axios.defaults.withCredentials = true;

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);
