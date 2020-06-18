import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//imports the css from index.css
import App from './App';//imports the app from app.js
import * as serviceWorker from './serviceWorker';
import "bootstrap";//imports bootstrap
import "bootstrap/dist/css/bootstrap.css"//imports bootstrap css
import "bootstrap/dist/js/bootstrap.js"//imports bootstrap javascript functionality
import $ from "jquery"
import Popper from "popper.js"//imports bootstrap

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
