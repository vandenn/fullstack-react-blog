import { createActionTypeTriad } from 'actions/utils';

export const types = {
  FETCH_TOTAL_POST_COMMENT_COUNT: createActionTypeTriad(
    'FETCH_TOTAL_POST_COMMENT_COUNT'
  ),
};

export const actions = {
  fetchTotalPostCommentCount: (postId) => ({
    type: types.FETCH_TOTAL_POST_COMMENT_COUNT.request,
    payload: { postId },
  }),
};
