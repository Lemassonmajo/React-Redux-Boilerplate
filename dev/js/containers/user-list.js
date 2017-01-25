// Siempre hay que importar React, aqui añadimos {Component} vamos a tratarlo como un componente
import React, {Component} from 'react';

import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';


class UserList extends Component {
	render () {
		return (
			<ul>
				<li>one</li>
				<li>two</li>
				<li>three</li>
			</ul>
		);
	}
}

// La funcion "mapStateToProps" coge un "state" del "store" y lo envia al "component" como "props", ahora lo podriamos llamar con "this.props.users"
function mapStateToProps(state) {
	return {
		users: state.users
	}
}

// Ahora exportamos como UserList el mapStateToProps, que es la lista de Usuarios
export default connect(mapStateToProps)(UserList);