import { call, put, takeLatest } from 'redux-saga/effects'
import { tasksLoadFailed, tasksLoadSuccess, tasksLoadByUserIdSuccess } from '../reducers/TasksReducer';
import { fetchTasks, fetchUserTasks, fetch20NewestTasks } from '../hooks/useTasks'

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
        yield put(tasksLoadByUserIdSuccess(results))
    }
    catch {
        yield put(tasksLoadFailed)
    }
}

function* fetchTasksMainView() {
    try {
        const results = yield call(fetch20NewestTasks);
        yield put(tasksLoadSuccess(results))
    }
    catch {
        yield put(tasksLoadFailed)
    }
}


export function* tasksSaga() {
    yield takeLatest('TASKS_LOAD_START', fetchTasksResults)
    yield takeLatest('TASKS_LOAD_20_NEWEST_START', fetchTasksMainView)
    yield takeLatest('TASKS_LOAD_BY_USER_ID_START', fetchTasksByUserId)
}

