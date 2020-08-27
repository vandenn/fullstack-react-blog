import axios from 'axios';
import * as routes from 'constants/backendRoutes';

export const fetchPostComments = (pid) => {
  return axios.get(routes.buildPostCommentsRoute(pid));
};

export const addCommentToPost = (pid, uid, comment) => {
  return axios.post(routes.buildPostCommentsRoute(pid), { uid, comment });
};
