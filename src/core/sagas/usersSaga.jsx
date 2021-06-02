import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchUsers } from '../hooks/useUsers'
import { usersLoadSuccess, usersLoadFailed } from '../reducers/UsersReducer'

function* fetchUsersResults() {
    try {
        const results = yield call(fetchUsers);
        yield put(usersLoadSuccess(results))
    }
    catch {
        yield put(usersLoadFailed)
    }
}

export function* usersSaga() {
    yield takeLatest('USERS_LOAD_START', fetchUsersResults)
}

