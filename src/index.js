import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(elemento, document.getElementById('root'));
const root = document.getElementById("root");
// const elemento = React.createElement(componente, propiedades, hijos);
// const elemento = React.createElement("h1", {className:"titulo"}, "Hola mundo");

ReactDOM.render(<App />, root);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
