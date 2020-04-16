import { all, call, put, takeEvery } from 'redux-saga/effects';
import { types } from '../../actions/requests/posts';
import * as postsService from '../../services/posts';

function* createPost({ payload }) {
  try {
    yield call(postsService.createPost, payload);
    yield put({ type: types.CREATE_POST_DONE });
  } catch (error) {
    yield put({ type: types.CREATE_POST_ERROR, error: error.toString() });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(types.CREATE_POST_REQUEST, createPost)]);
}
