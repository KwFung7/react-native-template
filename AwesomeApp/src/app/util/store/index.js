import {applyMiddleware, createStore} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import RootReducer from '../reducers';

const store = createStore(RootReducer, applyMiddleware(thunkMiddleWare));
export default store;