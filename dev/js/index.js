import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
// import {Provider} from 'react-redux';

//Esto un objeto grande de JavaScript que contiene todos los objetos de JavaScript
import {createStore} from 'redux';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import createLogger from 'redux-logger';

// importa los reducers, de la carpeta "reducers", por defecto lee el archivo "index.js"
import allReducers from './reducers';
// import App from './components/App';

// const logger = createLogger();
const store = createStore(allReducers);
//     allReducers,
//     applyMiddleware(thunk, promise, logger)
// );

ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));
