import axios from 'axios';
import * as routes from 'constants/backendRoutes';

export const fetchAllPosts = () => {
  return axios.get(routes.postsBase);
};

export const fetchTotalPostCount = () => {
  return axios.get(routes.postCountRoute);
};

export const fetchRangeOfPosts = (start, end) => {
  return axios.get(routes.buildFetchRangeOfPostsRoute(start, end));
};

export const fetchPost = (postId) => {
  return axios.get(routes.buildFetchPostRoute(postId));
};

export const createPost = (title, body, userId) => {
  return axios.post(routes.postsBase, { title, body, user_id: userId });
};

export const likePost = (postId, userId, unliked = false) => {
  return axios.put(routes.buildLikePostRoute(postId), {
    user_id: userId,
    unliked,
  });
};
