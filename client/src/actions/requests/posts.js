import { createActionTypeTriad } from 'actions/utils';

export const types = {
  CREATE_POST: createActionTypeTriad('CREATE_POST'),
  FETCH_POST: createActionTypeTriad('FETCH_POST'),
  FETCH_RANGE_OF_POSTS: createActionTypeTriad('FETCH_RANGE_OF_POSTS'),
  LIKE_POST: createActionTypeTriad('LIKE_POST'),
};

export const actions = {
  createPost: (title, body, uid) => ({
    type: types.CREATE_POST.request,
    payload: { title, body, uid },
  }),
  fetchPost: (pid) => ({
    type: types.FETCH_POST.request,
    payload: { pid },
  }),
  fetchRangeOfPosts: (startIndex, endIndex) => ({
    type: types.FETCH_RANGE_OF_POSTS.request,
    payload: { startIndex, endIndex },
  }),
  likePost: (pid) => ({
    type: types.LIKE_POST.request,
    payload: { pid },
  }),
};
