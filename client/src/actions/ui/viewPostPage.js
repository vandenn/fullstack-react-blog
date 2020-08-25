import { createActionTypeTriad } from 'actions/utils';

export const types = {
  INVOKE_FETCH_POST_AND_AUTHOR: createActionTypeTriad(
    'viewPostPage.INVOKE_FETCH_POST_AND_AUTHOR'
  ),
};

export const actions = {
  invokeFetchPostAndAuthor: (id) => ({
    type: types.INVOKE_FETCH_POST_AND_AUTHOR.request,
    payload: { id },
  }),
};
