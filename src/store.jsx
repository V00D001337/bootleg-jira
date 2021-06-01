import { combineReducers, createStore, applyMiddleware } from "redux";
import users from "./core/reducers/UsersReducer";
import tasks from "./core/reducers/TasksReducer";
import comments from './core/reducers/CommentsReducer'
import createSagaMiddleware from 'redux-saga';
import { tasksSaga } from "./core/sagas/tasksSaga";
import { commentsSaga } from "./core/sagas/commentsSaga";


const reducer = combineReducers({
    users,
    tasks,
    comments
})

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(tasksSaga)
sagaMiddleware.run(commentsSaga)