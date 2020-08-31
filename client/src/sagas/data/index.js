import { all } from 'redux-saga/effects';
import commentsSaga from './comments';
import postsSaga from './posts';
import usersSaga from './users';

export default function* rootSaga() {
  yield all([commentsSaga(), postsSaga(), usersSaga()]);
}
