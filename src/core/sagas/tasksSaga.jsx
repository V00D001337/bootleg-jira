import { call, put, takeLatest } from 'redux-saga/effects'
import { tasksLoadFailed, tasksLoadSuccess, tasksLoadByUserIdSuccess, taskDetailsLoadSuccess, tasksLoadUsers, tasksLoadSprints } from '../reducers/TasksReducer';
import { fetchTasks, fetchUserTasks, fetch20NewestTasks, fetchTaskWithId } from '../services/useTasks'
import { fetchUsers } from '../services/useUsers'
import { fetchSprints } from '../services/useSprints'

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

function* fetchTaskDetails(action) {
    try {
        const users = yield call(fetchUsers)
        yield put(tasksLoadUsers(users))
        const tasks = yield call(fetchSprints)
        yield put(tasksLoadSprints(tasks))
    }
    catch {
        yield put(tasksLoadFailed)
    }
    try {
        const results = yield call(fetchTaskWithId, action.payload.taskId)
        yield put(taskDetailsLoadSuccess(results))
    }
    catch {
        yield put(tasksLoadFailed)
    }
}


export function* tasksSaga() {
    yield takeLatest('TASKS_LOAD_START', fetchTasksResults)
    yield takeLatest('TASKS_LOAD_20_NEWEST_START', fetchTasksMainView)
    yield takeLatest('TASKS_LOAD_BY_USER_ID_START', fetchTasksByUserId)
    yield takeLatest('TASK_DETAILS_LOAD_START', fetchTaskDetails)
}

