import React from 'react';
import ReactDOM from 'react-dom';

import '@babel/polyfill';

import './index.css';
import App from './containers/App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// Service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log("El service worker se ha instalado correctamente!", registration.scope);
      })
      .catch((err) => {
        console.log("Ha fallado el registro del service worker!", err);
      })
  });
}
