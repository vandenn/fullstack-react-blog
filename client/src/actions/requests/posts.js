import { createActionTypeTriad } from 'actions/utils';

export const types = {
  CREATE_POST: createActionTypeTriad('CREATE_POST'),
  FETCH_POST: createActionTypeTriad('FETCH_POST'),
  FETCH_RANGE_OF_POSTS: createActionTypeTriad('FETCH_RANGE_OF_POSTS'),
  LIKE_POST: createActionTypeTriad('LIKE_POST'),
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
  likePost: (postId) => ({
    type: types.LIKE_POST.request,
    payload: { postId },
  }),
};
