import { all } from 'redux-saga/effects';
import homePageSaga from './homePage';
import viewPostPageSaga from './viewPostPage';

export default function* rootSaga() {
  yield all([homePageSaga(), viewPostPageSaga()]);
}
