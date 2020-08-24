import { all, put, race, take, takeEvery } from 'redux-saga/effects';
import {
  types as postsRequestsTypes,
  actions as postsRequestsActions,
} from 'actions/requests/posts';
import { actions as usersRequestsActions } from 'actions/requests/users';
import { types } from 'actions/ui/homePage';

function* invokeFetchVisiblePostsAndUsers({ payload }) {
  try {
    const { pageNumber, postsPerPage } = payload;
    const startIndex = pageNumber * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    yield put(postsRequestsActions.fetchRangeOfPosts(startIndex, endIndex));
    const [postsActionDone, postsActionError] = yield race([
      take(postsRequestsTypes.FETCH_RANGE_OF_POSTS.done),
      take(postsRequestsTypes.FETCH_RANGE_OF_POSTS.failed),
    ]);
    let posts = [];
    if (postsActionDone) {
      posts = postsActionDone.payload;
    } else {
      let error = 'No posts found in specified range!';
      if (postsActionError) error = `${error} ${postsActionError.error}`;
      throw new Error(error);
    }
    let userIds = [...new Set(posts.map((post) => post.user_id))];
    yield all(
      userIds.map((userId) => put(usersRequestsActions.fetchUserById(userId)))
    );
    yield put({
      type: types.INVOKE_FETCH_VISIBLE_POSTS_AND_USERS.done,
    });
  } catch (error) {
    yield put({
      type: types.INVOKE_FETCH_VISIBLE_POSTS_AND_USERS.failed,
      error: error.toString(),
    });
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(
      types.INVOKE_FETCH_VISIBLE_POSTS_AND_USERS.request,
      invokeFetchVisiblePostsAndUsers
    ),
  ]);
}
