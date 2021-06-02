import { call, put, takeLatest } from 'redux-saga/effects'
import { fetch20NewestComments } from '../hooks/useComments'
import { fetchUsers } from '../hooks/useUsers'
import { fetchTasks } from '../hooks/useTasks'
import { commentsLoadSuccess, commentsLoadFailed, commentsLoadUsers, commentsLoadTasks } from '../reducers/CommentsReducer'

function* fetchCommentsMainView() {
    try {
        const users = yield call(fetchUsers)
        yield put(commentsLoadUsers(users))
        const tasks = yield call(fetchTasks)
        yield put(commentsLoadTasks(tasks))
    }
    catch {
        yield put(commentsLoadFailed)
    }
    try {
        const results = yield call(fetch20NewestComments);
        yield put(commentsLoadSuccess(results))
    }
    catch {
        yield put(commentsLoadFailed)
    }
}

export function* commentsSaga() {
    yield takeLatest('COMMENTS_LOAD_20_NEWEST_START', fetchCommentsMainView)
}

