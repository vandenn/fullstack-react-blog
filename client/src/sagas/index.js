import { all } from 'redux-saga/effects';
import dataSaga from './data';
import statusSaga from './status';

export default function* rootSaga() {
  yield all([dataSaga(), statusSaga()]);
}
