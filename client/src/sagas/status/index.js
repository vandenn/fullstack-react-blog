import { all } from 'redux-saga/effects';
import postsStatusSaga from './posts';

export default function* rootSaga() {
  yield all([postsStatusSaga()]);
}
