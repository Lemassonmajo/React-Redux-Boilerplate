// el index sirve para reunir todos los reducers en un solo objeto
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';

const allReducers = combineReducers ({
	users: UserReducer
});