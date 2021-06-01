import { call, put, takeLatest } from 'redux-saga/effects'
import { fetch20NewestComments } from '../hooks/useComments'
import { commentsLoadSuccess, commentsLoadFailed } from '../reducers/CommentsReducer'

function* fetchCommentsMainView() {
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

