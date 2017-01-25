// este componente va a ser el index para los demas componentes

import React from 'react';
import UserList from "../containers/user-list"
require('../../scss/style.scss');

// esta es una nueva manera de escribit funciones
const App = () => (
	<div>
		<h2> Username List: </h2>
		<UserList />
		<hr/>
		<h2> User Details: </h2>

	</div>
);

export default App;