import {reducer as formReducer} from 'redux-form';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import login from './components/Login';
import thunkMiddleware from 'redux-thunk';
import authreducer from "./authReducer";

let reducer=combineReducers({
login:login,
    auth:authreducer,
    form: formReducer
});

let store=createStore(reducer,applyMiddleware(thunkMiddleware));
window.store=store;

export default store;