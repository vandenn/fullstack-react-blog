export const postsBase = '/api/posts';
export const usersBase = '/api/users';

export const buildFetchRangeOfPostsRoute = (start, end) =>
  `${postsBase}?start=${start}&end=${end}`;
export const buildFetchPostRoute = (pid) => `${postsBase}/${pid}`;
export const buildLikePostRoute = (pid) => `${postsBase}/${pid}/likes`;

export const buildFetchUserByIdRoute = (uid) => `${usersBase}/${uid}`;

export const buildPostCommentsRoute = (pid) => `${postsBase}/${pid}/comments`;
