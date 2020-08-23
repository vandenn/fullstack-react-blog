import axios from 'axios';
import * as routes from 'constants/backendRoutes';

export const addUser = ({ name, email, email_verified, picture }) =>
  axios.post(routes.usersBase, {
    username: name,
    email,
    email_verified,
    picture,
  });

export const fetchUser = ({ uid, username }) => {
  if (uid) return fetchUserById(uid);
  else if (username) return fetchUserByUsername(username);
  return null;
};

const fetchUserById = (uid) => axios.get(routes.buildFetchUserByIdRoute(uid));

const fetchUserByUsername = (username) =>
  axios.get(routes.usersBase, { params: { username } });
