import axios from 'axios';
import * as routes from 'constants/backendRoutes';

export const fetchPostComments = (pid) => {
  return axios.get(routes.buildPostCommentsRoute(pid));
};

export const fetchPostCommentsCount = (pid) => {
  return axios.get(routes.buildPostCommentsCountRoute(pid));
};

export const fetchRangeOfPostComments = (pid, start, end) => {
  return axios.get(routes.buildFetchRangeOfPostCommentsRoute(pid, start, end));
};

export const addCommentToPost = (pid, uid, comment) => {
  return axios.post(routes.buildPostCommentsRoute(pid), { uid, comment });
};
