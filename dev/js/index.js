import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

// Es necesarío para el deploy de la info
import {Provider} from 'react-redux';

// Esto un objeto grande de JavaScript que contiene todos los objetos de JavaScript
// Hace que el store sea accesible para todos los contenedores
import {createStore} from 'redux';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import createLogger from 'redux-logger';

// importa los reducers, de la carpeta "reducers", por defecto lee el archivo "index.js"
import allReducers from './reducers';

// importamos la carpeta donde tenemos los usuarios, etc... y lo llamamos App, para poder meterlo en el html
import App from './components/App';

// const logger = createLogger();
const store = createStore(allReducers);
//     allReducers,
//     applyMiddleware(thunk, promise, logger)
// );

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
