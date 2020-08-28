import { all, call, put, takeEvery } from 'redux-saga/effects';

import { types } from 'actions/data/posts';
import * as postsService from 'services/posts';

function* fetchTotalPostCount({ payload }) {
  try {
    const response = yield call(postsService.fetchTotalPostCount);
    const totalPostCount = response.data[0]
      ? parseInt(response.data[0].count)
      : 0;
    yield put({
      type: types.FETCH_TOTAL_POST_COUNT.done,
      payload: totalPostCount,
    });
  } catch (error) {
    yield put({
      type: types.FETCH_TOTAL_POST_COUNT.failed,
      error: error.toString(),
    });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.FETCH_TOTAL_POST_COUNT.request, fetchTotalPostCount),
  ]);
}
