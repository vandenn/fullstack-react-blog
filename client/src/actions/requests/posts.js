import { createActionTypeTriad } from 'actions/utils';

export const types = {
  CREATE_POST: createActionTypeTriad('CREATE_POST'),
  FETCH_POST: createActionTypeTriad('FETCH_POST'),
  FETCH_RANGE_OF_POSTS: createActionTypeTriad('FETCH_RANGE_OF_POSTS'),
  ADD_LIKE_TO_POST: createActionTypeTriad('ADD_LIKE_TO_POST'),
};

export const actions = {
  createPost: (title, body) => ({
    type: types.CREATE_POST.request,
    payload: { title, body },
  }),
  fetchPost: (postId) => ({
    type: types.FETCH_POST.request,
    payload: { postId },
  }),
  fetchRangeOfPosts: (startIndex, endIndex) => ({
    type: types.FETCH_RANGE_OF_POSTS.request,
    payload: { startIndex, endIndex },
  }),
  addLikeToPost: (postId) => ({
    type: types.ADD_LIKE_TO_POST.request,
    payload: { postId },
  }),
};
