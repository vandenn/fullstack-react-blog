import { all } from 'redux-saga/effects';
import usersDataSaga from './users';

export default function* rootSaga() {
  yield all([usersDataSaga()]);
}
