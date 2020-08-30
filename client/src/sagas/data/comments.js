import { all, call, put, takeEvery } from 'redux-saga/effects';

import { types } from 'actions/data/comments';
import * as commentsService from 'services/comments';

function* fetchTotalPostCommentCount({ payload }) {
  try {
    const { pid } = payload;
    const response = yield call(
      commentsService.fetchTotalPostCommentCount,
      pid
    );
    const totalPostCommentCount = response.data[0]
      ? parseInt(response.data[0].count)
      : 0;
    yield put({
      type: types.FETCH_TOTAL_POST_COMMENT_COUNT.done,
      payload: { postId: pid, commentCount: totalPostCommentCount },
    });
  } catch (error) {
    yield put({
      type: types.FETCH_TOTAL_POST_COMMENT_COUNT.failed,
      error: error.toString(),
    });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(
      types.FETCH_TOTAL_POST_COMMENT_COUNT.request,
      fetchTotalPostCommentCount
    ),
  ]);
}
