// el index sirve para reunir todos los reducers en un solo objeto
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';

const allReducers = combineReducers ({
	users: UserReducer
});

// siempre hay que decir que es lo que se quiere exportar
export default allReducers