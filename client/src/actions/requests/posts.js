import { createActionTypeTriad } from 'actions/utils';

export const types = {
  CREATE_POST: createActionTypeTriad('CREATE_POST'),
  FETCH_POST: createActionTypeTriad('FETCH_POST'),
};

export const actions = {
  createPost: (title, body, uid) => ({
    type: types.CREATE_POST.request,
    payload: { title, body, uid },
  }),
  fetchPost: (pid) => ({
    type: types.FETCH_POST.request,
    payload: { pid },
  }),
};
