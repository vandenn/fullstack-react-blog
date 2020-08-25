import { all, call, put, race, take, takeEvery } from 'redux-saga/effects';
import {
  types as postsRequestsTypes,
  actions as postsRequestsActions,
} from 'actions/requests/posts';
import { actions as usersRequestsActions } from 'actions/requests/users';
import { types } from 'actions/ui/viewPostPage';

function* invokeFetchPostAndAuthor({ payload }) {
  try {
    const { id } = payload;
    const post = yield call(fetchPost, id);
    yield call(fetchPostAuthor, post);
    yield put({
      type: types.INVOKE_FETCH_POST_AND_AUTHOR.done,
    });
  } catch (error) {
    yield put({
      type: types.INVOKE_FETCH_POST_AND_AUTHOR.failed,
      error: error.toString(),
    });
  }
}

function* fetchPost(id) {
  yield put(postsRequestsActions.fetchPost(id));
  const [postsActionDone, postsActionError] = yield race([
    take(postsRequestsTypes.FETCH_POST.done),
    take(postsRequestsTypes.FETCH_POST.failed),
  ]);
  let post;
  if (postsActionDone) {
    post = postsActionDone.payload;
  } else {
    let error = 'No post found with specified id!';
    if (postsActionError) error = `${error} ${postsActionError.error}`;
    throw new Error(error);
  }
  return post;
}

function* fetchPostAuthor(post) {
  const userId = post.user_id;
  yield put(usersRequestsActions.fetchUserById(userId));
}

export default function* rootSaga() {
  yield all([
    takeEvery(
      types.INVOKE_FETCH_POST_AND_AUTHOR.request,
      invokeFetchPostAndAuthor
    ),
  ]);
}
