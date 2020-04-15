import { all } from 'redux-saga/effects';
import currentUserSaga from './currentUser';

export default function* rootSaga() {
  yield all([currentUserSaga()]);
}
