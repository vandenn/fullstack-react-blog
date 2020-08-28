import { all } from 'redux-saga/effects';
import postsDataSaga from './posts';
import usersDataSaga from './users';

export default function* rootSaga() {
  yield all([postsDataSaga(), usersDataSaga()]);
}
