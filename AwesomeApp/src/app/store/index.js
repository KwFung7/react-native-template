import {applyMiddleware, createStore} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import RootReducer from '../reducers/index';

const middlewares = [thunkMiddleWare];

if (__DEV__) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(RootReducer, applyMiddleware(...middlewares));
export default store;