export const postsBase = '/api/posts';
export const usersBase = '/api/users';

export const postCountRoute = `${postsBase}/count`;
export const buildFetchRangeOfPostsRoute = (start, end) =>
  `${postsBase}?start=${start}&end=${end}`;
export const buildFetchPostRoute = (postId) => `${postsBase}/${postId}`;
export const buildAddLikeToPostRoute = (postId) =>
  `${postsBase}/${postId}/likes`;

export const buildFetchUserByIdRoute = (userId) => `${usersBase}/${userId}`;

export const buildPostCommentsRoute = (postId) =>
  `${postsBase}/${postId}/comments`;
export const buildPostCommentsCountRoute = (postId) =>
  `${buildPostCommentsRoute(postId)}/count`;
export const buildFetchRangeOfPostCommentsRoute = (postId, start, end) =>
  `${buildPostCommentsRoute(postId)}?start=${start}&end=${end}`;
