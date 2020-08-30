import { createActionTypeTriad } from 'actions/utils';

export const types = {
  SET_COMMENT_LIST_PAGE_NUMBER: createActionTypeTriad(
    'homePage.SET_COMMENT_LIST_PAGE_NUMBER'
  ),
  SET_NUMBER_OF_COMMENTS_PER_PAGE: createActionTypeTriad(
    'homePage.SET_NUMBER_OF_COMMENTS_PER_PAGE'
  ),
  INVOKE_FETCH_POST_AND_AUTHOR: createActionTypeTriad(
    'viewPostPage.INVOKE_FETCH_POST_AND_AUTHOR'
  ),
};

export const actions = {
  setCommentListPageNumber: (pageNumber) => ({
    type: types.SET_COMMENT_LIST_PAGE_NUMBER.done,
    payload: { pageNumber },
  }),
  setNumberOfCommentsPerPage: (count) => ({
    type: types.SET_NUMBER_OF_COMMENTS_PER_PAGE.done,
    payload: { count },
  }),
  invokeFetchPostAndAuthor: (id) => ({
    type: types.INVOKE_FETCH_POST_AND_AUTHOR.request,
    payload: { id },
  }),
};
