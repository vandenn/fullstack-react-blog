import { all } from 'redux-saga/effects';
import postsRequestsSaga from './posts';
import usersRequestSaga from './users';

export default function* rootSaga() {
  yield all([postsRequestsSaga(), usersRequestSaga()]);
}
