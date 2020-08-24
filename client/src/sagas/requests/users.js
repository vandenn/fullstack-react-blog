import { all, call, put, takeEvery } from 'redux-saga/effects';
import { types } from 'actions/requests/users';
import * as usersService from 'services/users';

function* addUser({ payload }) {
  try {
    const response = yield call(usersService.addUser, payload);
    const user = response.data[0];
    if (!user) throw new Error("Can't add new user!");
    yield put({ type: types.ADD_USER.done, payload: user });
  } catch (error) {
    yield put({ type: types.ADD_USER.failed, error: error.toString() });
  }
}

function* fetchUser({ payload }) {
  try {
    const response = yield call(usersService.fetchUser, payload);
    const user = response.data[0];
    if (!user) throw new Error('User not found!');
    yield put({ type: types.FETCH_USER.done, payload: user });
  } catch (error) {
    yield put({ type: types.FETCH_USER.failed, error: error.toString() });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.ADD_USER.request, addUser),
    takeEvery(types.FETCH_USER.request, fetchUser),
  ]);
}
