export const types = {
  CREATE_POST_REQUEST: 'CREATE_POST_REQUEST',
  CREATE_POST_DONE: 'CREATE_POST_DONE',
  CREATE_POST_ERROR: 'CREATE_POST_ERROR',
};

export const actions = {
  createPost: (title, body, uid) => ({
    type: types.CREATE_POST_REQUEST,
    payload: { title, body, uid },
  }),
};
