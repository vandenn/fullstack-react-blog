import { all } from 'redux-saga/effects';
import postsRequestsSaga from './posts';

export default function* rootSaga() {
  yield all([postsRequestsSaga()]);
}
