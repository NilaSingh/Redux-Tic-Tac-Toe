import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactDom from 'react-dom'
import Game from './components/Game'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux' 
import reducer from './reducer'

const store = createStore(reducer)
ReactDOM.render(
  <Provider store = {store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
