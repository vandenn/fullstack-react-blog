import axios from 'axios';
import * as routes from 'constants/backendRoutes';

export const fetchPostComments = (postId) => {
  return axios.get(routes.buildPostCommentsRoute(postId));
};

export const fetchTotalPostCommentCount = (postId) => {
  return axios.get(routes.buildPostCommentsCountRoute(postId));
};

export const fetchRangeOfPostComments = (postId, start, end) => {
  return axios.get(
    routes.buildFetchRangeOfPostCommentsRoute(postId, start, end)
  );
};

export const addCommentToPost = (postId, userId, comment) => {
  return axios.post(routes.buildPostCommentsRoute(postId), {
    user_id: userId,
    comment,
  });
};
