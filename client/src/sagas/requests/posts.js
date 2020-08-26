import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { types } from 'actions/requests/posts';
import { makeCurrentUserIdSelector } from 'selectors/data/currentUser';
import * as postsService from 'services/posts';

function* createPost({ payload }) {
  try {
    yield call(postsService.createPost, payload);
    yield put({ type: types.CREATE_POST.done });
  } catch (error) {
    yield put({ type: types.CREATE_POST.failed, error: error.toString() });
  }
}

function* fetchPost({ payload }) {
  try {
    const response = yield call(postsService.fetchPost, payload.pid);
    const post = response.data[0];
    if (!post) throw new Error(`Post with ID ${payload.pid} does not exist!`);
    yield put({ type: types.FETCH_POST.done, payload: post });
  } catch (error) {
    yield put({ type: types.FETCH_POST.failed, error: error.toString() });
  }
}

function* fetchRangeOfPosts({ payload }) {
  try {
    const { startIndex, endIndex } = payload;
    const response = yield call(
      postsService.fetchRangeOfPosts,
      startIndex,
      endIndex
    );
    const posts = response.data;
    yield put({ type: types.FETCH_RANGE_OF_POSTS.done, payload: posts });
  } catch (error) {
    yield put({
      type: types.FETCH_RANGE_OF_POSTS.failed,
      error: error.toString(),
    });
  }
}

function* likePost({ payload }) {
  try {
    const { pid } = payload;
    const currentUserIdSelector = makeCurrentUserIdSelector();
    const currentUserId = yield select(currentUserIdSelector);
    const response = yield call(postsService.likePost, pid, currentUserId);
    console.log(response);
    yield put({ type: types.LIKE_POST.done });
  } catch (error) {
    yield put({
      type: types.LIKE_POST.failed,
      error: error.toString(),
    });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(types.CREATE_POST.request, createPost),
    takeEvery(types.FETCH_POST.request, fetchPost),
    takeEvery(types.FETCH_RANGE_OF_POSTS.request, fetchRangeOfPosts),
    takeEvery(types.LIKE_POST.request, likePost),
  ]);
}
