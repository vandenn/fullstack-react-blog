import {
  all,
  call,
  put,
  race,
  select,
  take,
  takeEvery,
} from 'redux-saga/effects';
import {
  types as postsRequestsTypes,
  actions as postsRequestsActions,
} from 'actions/requests/posts';
import { actions as usersRequestsActions } from 'actions/requests/users';
import { types } from 'actions/ui/homePage';
import {
  makePostListPageNumberSelector,
  makeNumberOfPostsPerPageSelector,
} from 'selectors/ui/homePage';

function* invokeFetchVisiblePostsAndUsers({ payload }) {
  try {
    const postListPageNumberSelector = makePostListPageNumberSelector();
    const postListPageNumber = yield select(postListPageNumberSelector);
    const numberOfPostsPerPageSelector = makeNumberOfPostsPerPageSelector();
    const numberOfPostsPerPage = yield select(numberOfPostsPerPageSelector);
    const posts = yield call(
      fetchVisiblePosts,
      postListPageNumber,
      numberOfPostsPerPage
    );
    yield call(fetchVisiblePostsAuthors, posts);
    yield put({
      type: types.INVOKE_FETCH_VISIBLE_POSTS_AND_AUTHORS.done,
    });
  } catch (error) {
    yield put({
      type: types.INVOKE_FETCH_VISIBLE_POSTS_AND_AUTHORS.failed,
      error: error.toString(),
    });
  }
}

function* fetchVisiblePosts(pageNumber, postsPerPage) {
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
  return posts;
}

function* fetchVisiblePostsAuthors(posts) {
  let userIds = [...new Set(posts.map((post) => post.user_id))];
  yield all(
    userIds.map((userId) => put(usersRequestsActions.fetchUserById(userId)))
  );
}

export default function* rootSaga() {
  yield all([
    takeEvery(
      types.INVOKE_FETCH_VISIBLE_POSTS_AND_AUTHORS.request,
      invokeFetchVisiblePostsAndUsers
    ),
  ]);
}
