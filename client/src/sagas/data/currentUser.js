import { all, put, race, take, takeEvery } from 'redux-saga/effects';
import { types } from 'actions/data/currentUser';
import { types as usersRequestsTypes, actions } from 'actions/requests/users';

function* setCurrentUser({ payload }) {
  try {
    yield put(actions.addUser(payload));
    const [actionDone, actionError] = yield race([
      take(usersRequestsTypes.ADD_USER_DONE),
      take(usersRequestsTypes.ADD_USER_ERROR),
    ]);
    if (actionDone) {
      const user = actionDone.payload;
      yield put({ type: types.SET_CURRENT_USER_DONE, payload: user.uid });
    } else {
      let error = "Current user can't be retrieved and set!";
      if (actionError) error = `${error} ${actionError.error}`;
      throw new Error(error);
    }
  } catch (error) {
    yield put({ type: types.SET_CURRENT_USER_ERROR, error: error.toString() });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(types.SET_CURRENT_USER_REQUEST, setCurrentUser)]);
}
