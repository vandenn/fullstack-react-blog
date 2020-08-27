import { combineReducers } from 'redux';

import { types } from 'actions/requests/posts';
import * as utils from 'reducers/requests/utils';

const isCreatingPost = utils.createIsRequestRunningReducer(types.CREATE_POST);
const createPostError = utils.createRequestErrorReducer(types.CREATE_POST);
const isFetchingPost = utils.createIsRequestRunningReducer(types.FETCH_POST);
const fetchPostError = utils.createRequestErrorReducer(types.FETCH_POST);
const isFetchingRangeOfPosts = utils.createIsRequestRunningReducer(
  types.FETCH_RANGE_OF_POSTS
);
const fetchRangeOfPostsError = utils.createRequestErrorReducer(
  types.FETCH_RANGE_OF_POSTS
);
const isSettingPostLike = utils.createIsRequestRunningReducer(types.LIKE_POST);
const likePostError = utils.createRequestErrorReducer(types.LIKE_POST);

export default combineReducers({
  isCreatingPost,
  createPostError,
  isFetchingPost,
  fetchPostError,
  isFetchingRangeOfPosts,
  fetchRangeOfPostsError,
  isSettingPostLike,
  likePostError,
});
