import {createStore, combineReducers, applyMiddleware} from 'redux';
// import createLogger from 'redux-logger';
import rootReducer from './src/reducers';
import { routerReducer } from 'react-router-redux'
import {createLogger} from 'redux-logger'

import thunk from 'redux-thunk';
import promise from 'redux-promise';


const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
// 
// 

export default function configureStore(initialState ){
	// const store = createStore(
	//   rootReducer, initialState
	// )
	const store = createStoreWithMiddleware(
	  combineReducers(Object.assign(rootReducer, {routing: routerReducer})), 
	  initialState
	)
	return store
}

