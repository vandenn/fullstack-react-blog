import { all } from 'redux-saga/effects';
import dataSaga from './data';
import requestsSaga from './requests';
import uiSaga from './ui';

export default function* rootSaga() {
  yield all([dataSaga(), requestsSaga(), uiSaga()]);
}
