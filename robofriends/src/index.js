import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CardList from "./CardList"; 
import * as serviceWorker from './serviceWorker';
import 'tachyons';

import { robots } from "./robots";

// we have to destructuring（分割構文）

ReactDOM.render(
  <CardList robots={ robots }/> 
  ,document.getElementById('root'));

/*　robots のプロパティ（オブジェクトの　id, name, email）を受け取る */


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
