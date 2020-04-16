export const postsBase = '/api/posts';
export const usersBase = '/api/users';
export const buildFetchPostRoute = (pid) => `${postsBase}/${pid}`;
export const buildFetchUserByIdRoute = (uid) => `${usersBase}/${uid}`;
