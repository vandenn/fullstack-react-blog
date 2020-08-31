import { createActionTypeTriad } from 'actions/utils';

export const types = {
  SET_POST_LIST_PAGE_NUMBER: createActionTypeTriad(
    'homePage.SET_POST_LIST_PAGE_NUMBER'
  ),
  SET_NUMBER_OF_POSTS_PER_PAGE: createActionTypeTriad(
    'homePage.SET_NUMBER_OF_POSTS_PER_PAGE'
  ),
  INVOKE_FETCH_VISIBLE_POSTS_AND_AUTHORS: createActionTypeTriad(
    'homePage.INVOKE_FETCH_VISIBLE_POSTS_AND_AUTHORS'
  ),
};

export const actions = {
  setPostListPageNumber: (pageNumber) => ({
    type: types.SET_POST_LIST_PAGE_NUMBER.done,
    payload: { pageNumber },
  }),
  setNumberOfPostsPerPage: (postsPerPage) => ({
    type: types.SET_NUMBER_OF_POSTS_PER_PAGE.done,
    payload: { postsPerPage },
  }),
  invokeFetchVisiblePostsAndAuthors: () => ({
    type: types.INVOKE_FETCH_VISIBLE_POSTS_AND_AUTHORS.request,
  }),
};
