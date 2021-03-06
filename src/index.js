import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Root from './components/word/Root';

import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery.ui.layout/jquery/jquery-2.1.1.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
