import { call, put, takeLatest } from 'redux-saga/effects'
import { fetch20NewestComments, fetchCommentsForTask, newComment } from '../services/useComments'
import { fetchUsers } from '../services/useUsers'
import { fetchTasks } from '../services/useTasks'
import { commentsLoadSuccess, commentsLoadFailed, commentsLoadUsers, commentsLoadTasks, addComment } from '../reducers/CommentsReducer'

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

function* fetchCommentForTask(action) {
    try {
        const comments = yield call(fetchCommentsForTask, action.payload.taskId)
        yield put(commentsLoadSuccess(comments))
    }
    catch {
        yield put(commentsLoadFailed)
    }
}

function* publishComment(action) {
    try {
        yield call(newComment(action.payload.comment))
    }
    catch {
        console.log('put comment to server failed');
    }
}

export function* commentsSaga() {
    yield takeLatest('COMMENTS_LOAD_20_NEWEST_START', fetchCommentsMainView)
    yield takeLatest('COMMENTS_LOAD_FOR_TASK', fetchCommentForTask)
    yield takeLatest('ADD_COMMENT', publishComment)
}

