import { combineReducers, createStore, applyMiddleware } from "redux";
import users from "./core/reducers/UsersReducer";
import createSagaMiddleware from 'redux-saga';


const reducer = combineReducers({
    users
})

export const store = createStore(reducer);

