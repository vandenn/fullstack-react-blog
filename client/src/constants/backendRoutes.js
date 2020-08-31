export const postsBaseRoute = '/api/posts';
export const usersBaseRoute = '/api/users';

export const postCountRoute = `${postsBaseRoute}/count`;
export const buildFetchRangeOfPostsRoute = (start, end) =>
  `${postsBaseRoute}?start=${start}&end=${end}`;
export const buildFetchPostRoute = (postId) => `${postsBaseRoute}/${postId}`;
export const buildAddLikeToPostRoute = (postId) =>
  `${postsBaseRoute}/${postId}/likes`;

export const buildFetchUserByIdRoute = (userId) =>
  `${usersBaseRoute}/${userId}`;

export const buildPostCommentsRoute = (postId) =>
  `${postsBaseRoute}/${postId}/comments`;
export const buildPostCommentsCountRoute = (postId) =>
  `${buildPostCommentsRoute(postId)}/count`;
export const buildFetchRangeOfPostCommentsRoute = (postId, start, end) =>
  `${buildPostCommentsRoute(postId)}?start=${start}&end=${end}`;
