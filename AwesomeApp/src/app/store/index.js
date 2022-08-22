import {applyMiddleware, createStore} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import RootReducer from '../reducers/index';

const store = createStore(RootReducer, applyMiddleware(thunkMiddleWare));
export default store;