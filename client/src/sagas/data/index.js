import { all } from 'redux-saga/effects';
import commentsDataSaga from './comments';
import postsDataSaga from './posts';
import usersDataSaga from './users';

export default function* rootSaga() {
  yield all([commentsDataSaga(), postsDataSaga(), usersDataSaga()]);
}
