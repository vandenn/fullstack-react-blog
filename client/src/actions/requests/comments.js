import { createActionTypeTriad } from 'actions/utils';

export const types = {
  ADD_COMMENT_TO_POST: createActionTypeTriad('ADD_COMMENT_TO_POST'),
  FETCH_RANGE_OF_POST_COMMENTS: createActionTypeTriad(
    'FETCH_RANGE_OF_POST_COMMENTS'
  ),
};

export const actions = {
  addCommentToPost: (postId, comment) => ({
    type: types.ADD_COMMENT_TO_POST.request,
    payload: { postId, comment },
  }),
  fetchRangeOfPostComments: (postId, startIndex, endIndex) => ({
    type: types.FETCH_RANGE_OF_POST_COMMENTS.request,
    payload: { postId, startIndex, endIndex },
  }),
};
