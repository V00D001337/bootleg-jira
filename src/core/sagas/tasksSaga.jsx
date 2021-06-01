import { call, put, takeLatest } from 'redux-saga/effects'
import { tasksLoadFailed, tasksLoadSuccess } from '../reducers/TasksReducer';
import { fetchTasks, fetchUserTasks } from '../hooks/useTasks'

function* fetchTasksResults() {
    try {
        const results = yield call(fetchTasks);
        yield put(tasksLoadSuccess(results))
    }
    catch {
        yield put(tasksLoadFailed)
    }
}

function* fetchTasksByUserId(action) {
    try {
        const results = yield call(fetchUserTasks, action.payload.userId);
        yield put(tasksLoadSuccess(results))
    }
    catch {
        yield put(tasksLoadFailed)
    }
}


export function* tasksSaga() {
    yield takeLatest('TASKS_LOAD_START', fetchTasksResults)
    yield takeLatest('TASKS_LOAD_BY_USER_ID_START', fetchTasksByUserId)
    
}

