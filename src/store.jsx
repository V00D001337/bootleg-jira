import { combineReducers, createStore, applyMiddleware } from "redux";
import users from "./core/reducers/UsersReducer";
import tasks from "./core/reducers/TasksReducer";
import createSagaMiddleware from 'redux-saga';
import { tasksSaga } from "./core/sagas/tasksSaga";


const reducer = combineReducers({
    users,
    tasks
})

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(tasksSaga)