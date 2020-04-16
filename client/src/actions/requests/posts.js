export const types = {
  CREATE_POST_REQUEST: 'CREATE_POST_REQUEST',
  CREATE_POST_DONE: 'CREATE_POST_DONE',
  CREATE_POST_ERROR: 'CREATE_POST_ERROR',
  FETCH_POST_REQUEST: 'FETCH_POST_REQUEST',
  FETCH_POST_DONE: 'FETCH_POST_DONE',
  FETCH_POST_ERROR: 'FETCH_POST_ERROR',
};

export const actions = {
  createPost: (title, body, uid) => ({
    type: types.CREATE_POST_REQUEST,
    payload: { title, body, uid },
  }),
  fetchPost: (pid) => ({
    type: types.FETCH_POST_REQUEST,
    payload: { pid },
  }),
};
