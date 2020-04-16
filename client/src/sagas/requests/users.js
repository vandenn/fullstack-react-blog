import { types } from '../../actions/requests/users';
import * as usersService from '../../services/users';

function* fetchUser({ payload }) {
  try {
    const response = yield call(usersService.fetchUser, payload);
    const user = response.data[0];
    if (!user) throw new Error('User not found!');
    yield put({ type: types.FETCH_USER_DONE, payload: user });
  } catch (error) {
    yield put({ type: types.FETCH_USER_ERROR, error: error.toString() });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(types.FETCH_USER_REQUEST, fetchUser)]);
}
