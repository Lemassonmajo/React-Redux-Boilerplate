// este componente va a ser el index para los demas componentes

import React from 'react';

// Cremos la className UserList, que se comppne del "return" del archivo user-list
import UserList from "../containers/user-list"
require('../../scss/style.scss');

// esta es una nueva manera de escribit funciones
const App = () => (
	// Llamamos a la clase UserList
	<div>
		<h2> Username List: </h2>
		<UserList />
		<hr/>
		<h2> User Details: </h2>

	</div>
);

export default App;