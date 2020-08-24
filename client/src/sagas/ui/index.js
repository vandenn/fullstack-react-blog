import { all } from 'redux-saga/effects';
import homePageSaga from './homePage';

export default function* rootSaga() {
  yield all([homePageSaga()]);
}
