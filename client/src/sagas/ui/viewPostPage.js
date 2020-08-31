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
import {
  types as commentsRequestsTypes,
  actions as commentsRequestsActions,
} from 'actions/requests/comments';
import { actions as usersRequestsActions } from 'actions/requests/users';
import { types } from 'actions/ui/viewPostPage';
import {
  makeCommentListPageNumberSelector,
  makeNumberOfCommentsPerPageSelector,
} from 'selectors/ui/viewPostPage';

function* invokeFetchPostAndAuthor({ payload }) {
  try {
    const { postId } = payload;
    const post = yield call(fetchPost, postId);
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

function* fetchPost(postId) {
  yield put(postsRequestsActions.fetchPost(postId));
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

function* invokeFetchVisibleCommentsAndAuthors({ payload }) {
  try {
    const { postId } = payload;
    const commentListPageNumberSelector = makeCommentListPageNumberSelector();
    const commentListPageNumber = yield select(commentListPageNumberSelector);
    const numberOfCommentsPerPageSelector = makeNumberOfCommentsPerPageSelector();
    const numberOfCommentsPerPage = yield select(
      numberOfCommentsPerPageSelector
    );
    const comments = yield call(
      fetchVisibleComments,
      postId,
      commentListPageNumber,
      numberOfCommentsPerPage
    );
    yield call(fetchVisibleCommentsAuthors, comments);
    yield put({
      type: types.INVOKE_FETCH_VISIBLE_COMMENTS_AND_AUTHORS.done,
    });
  } catch (error) {
    yield put({
      type: types.INVOKE_FETCH_VISIBLE_COMMENTS_AND_AUTHORS.failed,
      error: error.toString(),
    });
  }
}

function* fetchVisibleComments(postId, pageNumber, commentsPerPage) {
  const startIndex = pageNumber * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  yield put(
    commentsRequestsActions.fetchRangeOfPostComments(
      postId,
      startIndex,
      endIndex
    )
  );
  const [commentsActionDone, commentsActionError] = yield race([
    take(commentsRequestsTypes.FETCH_RANGE_OF_POST_COMMENTS.done),
    take(commentsRequestsTypes.FETCH_RANGE_OF_POST_COMMENTS.failed),
  ]);
  let comments = [];
  if (commentsActionDone) {
    comments = commentsActionDone.payload;
  } else {
    let error = 'No comments found in specified range!';
    if (commentsActionError) error = `${error} ${commentsActionError.error}`;
    throw new Error(error);
  }
  return comments;
}

function* fetchVisibleCommentsAuthors(comments) {
  let userIds = [...new Set(comments.map((comment) => comment.user_id))];
  yield all(
    userIds.map((userId) => put(usersRequestsActions.fetchUserById(userId)))
  );
}

export default function* rootSaga() {
  yield all([
    takeEvery(
      types.INVOKE_FETCH_POST_AND_AUTHOR.request,
      invokeFetchPostAndAuthor
    ),
    takeEvery(
      types.INVOKE_FETCH_VISIBLE_COMMENTS_AND_AUTHORS.request,
      invokeFetchVisibleCommentsAndAuthors
    ),
  ]);
}
