import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import reportWebVitals from './reportWebVitals';
import App from './components/app';

import { Provider } from 'react-redux';
import store from './components/store/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
