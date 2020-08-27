import { all } from 'redux-saga/effects';
import commentsRequestsSaga from './comments';
import postsRequestsSaga from './posts';
import usersRequestSaga from './users';

export default function* rootSaga() {
  yield all([commentsRequestsSaga(), postsRequestsSaga(), usersRequestSaga()]);
}
