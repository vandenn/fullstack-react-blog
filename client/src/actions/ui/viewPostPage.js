import { createActionTypeTriad } from 'actions/utils';

export const types = {
  SET_COMMENT_LIST_PAGE_NUMBER: createActionTypeTriad(
    'viewPostPage.SET_COMMENT_LIST_PAGE_NUMBER'
  ),
  SET_NUMBER_OF_COMMENTS_PER_PAGE: createActionTypeTriad(
    'viewPostPage.SET_NUMBER_OF_COMMENTS_PER_PAGE'
  ),
  INVOKE_FETCH_POST_AND_AUTHOR: createActionTypeTriad(
    'viewPostPage.INVOKE_FETCH_POST_AND_AUTHOR'
  ),
  INVOKE_FETCH_VISIBLE_COMMENTS_AND_AUTHORS: createActionTypeTriad(
    'viewPostPage.INVOKE_FETCH_VISIBLE_COMMENTS_AND_AUTHORS'
  ),
};

export const actions = {
  setCommentListPageNumber: (pageNumber) => ({
    type: types.SET_COMMENT_LIST_PAGE_NUMBER.done,
    payload: { pageNumber },
  }),
  setNumberOfCommentsPerPage: (commentsPerPage) => ({
    type: types.SET_NUMBER_OF_COMMENTS_PER_PAGE.done,
    payload: { commentsPerPage },
  }),
  invokeFetchPostAndAuthor: (postId) => ({
    type: types.INVOKE_FETCH_POST_AND_AUTHOR.request,
    payload: { postId },
  }),
  invokeFetchVisibleCommentsAndAuthors: (postId) => ({
    type: types.INVOKE_FETCH_VISIBLE_COMMENTS_AND_AUTHORS.request,
    payload: { postId },
  }),
};
