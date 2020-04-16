export const types = {
  CREATE_POST_REQUEST: 'CREATE_POST_REQUEST',
  CREATE_POST_DONE: 'CREATE_POST_DONE',
  CREATE_POST_ERROR: 'CREATE_POST_ERROR',
};

export const actions = {
  createPost: (postData) => ({
    type: types.CREATE_POST_REQUEST,
    payload: postData,
  }),
};
