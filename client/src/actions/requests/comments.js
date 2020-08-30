import { createActionTypeTriad } from 'actions/utils';

export const types = {
  ADD_COMMENT_TO_POST: createActionTypeTriad('ADD_COMMENT_TO_POST'),
  FETCH_RANGE_OF_POST_COMMENTS: createActionTypeTriad(
    'FETCH_RANGE_OF_POST_COMMENTS'
  ),
};

export const actions = {
  addCommentToPost: (pid, comment) => ({
    type: types.ADD_COMMENT_TO_POST.request,
    payload: { pid, comment },
  }),
  fetchRangeOfPostComments: (pid, startIndex, endIndex) => ({
    type: types.FETCH_RANGE_OF_POST_COMMENTS.request,
    payload: { pid, startIndex, endIndex },
  }),
};
