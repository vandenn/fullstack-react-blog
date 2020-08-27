import { createActionTypeTriad } from 'actions/utils';

export const types = {
  ADD_COMMENT_TO_POST: createActionTypeTriad('ADD_COMMENT_TO_POST'),
  FETCH_POST_COMMENTS: createActionTypeTriad('FETCH_POST_COMMENTS'),
};

export const actions = {
  addCommentToPost: (pid, comment) => ({
    type: types.ADD_COMMENT_TO_POST.request,
    payload: { pid, comment },
  }),
  fetchPostComments: (pid) => ({
    type: types.FETCH_POST_COMMENTS.request,
    payload: { pid },
  }),
};
