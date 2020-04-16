import { all, call, put, takeEvery } from 'redux-saga/effects';
import { types } from '../../actions/data/currentUser';
import * as usersService from '../../services/users';

function* setCurrentUser({ payload }) {
  try {
    yield call(usersService.addUser, payload);
    const response = yield call(usersService.getUser, payload.name);
    const user = response.data[0];
    if (!user) throw new Error("Current user can't be retrieved and set!");
    yield put({ type: types.SET_CURRENT_USER_DONE, payload: user });
  } catch (error) {
    yield put({ type: types.SET_CURRENT_USER_ERROR, error: error.toString() });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(types.SET_CURRENT_USER_REQUEST, setCurrentUser)]);
}
