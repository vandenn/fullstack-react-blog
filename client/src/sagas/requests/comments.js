import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { types } from 'actions/requests/comments';
import { makeCurrentUserIdSelector } from 'selectors/data/users';
import * as commentsService from 'services/comments';

function* fetchPostComments({ payload }) {
  try {
    const { pid } = payload;
    const response = yield call(commentsService.fetchPostComments, pid);
    const comments = response.data || [];
    yield put({ type: types.FETCH_POST_COMMENTS.done, payload: comments });
  } catch (error) {
    yield put({
      type: types.FETCH_POST_COMMENTS.failed,
      error: error.toString(),
    });
  }
}

function* addCommentToPost({ payload }) {
  try {
    const { pid, comment: commentText } = payload;
    const currentUserIdSelector = makeCurrentUserIdSelector();
    const currentUserId = yield select(currentUserIdSelector);
    const response = yield call(
      commentsService.addCommentToPost,
      pid,
      currentUserId,
      commentText
    );
    const comment = response.data[0];
    if (!comment) throw new Error("Can't add comment!");
    yield put({ type: types.ADD_COMMENT_TO_POST.done, payload: comment });
  } catch (error) {
    yield put({
      type: types.ADD_COMMENT_TO_POST.failed,
      error: error.toString(),
    });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.FETCH_POST_COMMENTS.request, fetchPostComments),
    takeEvery(types.ADD_COMMENT_TO_POST.request, addCommentToPost),
  ]);
}
