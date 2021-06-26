
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReduser';


const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk))

export default store;