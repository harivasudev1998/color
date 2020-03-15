import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AddColorComp from './AddColorComp';
import DisplayColorComp from './DisplayColorComp';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<AddColorComp/>,document.getElementById('addColor'));

ReactDOM.render(<DisplayColorComp/>,document.getElementById('displayColor'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
