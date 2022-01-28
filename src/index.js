import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppStyleWrapper } from './styles/globals/main.styled';

ReactDOM.render(
  <React.StrictMode>
    <AppStyleWrapper />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

