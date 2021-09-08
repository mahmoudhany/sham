import React from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './context';
import './index.css';
import App from './pages/app';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>
  ,
  document.getElementById('root')
);
