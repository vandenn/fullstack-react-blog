import axios from 'axios';
import * as routes from 'constants/backendRoutes';

export const addUser = ({ name, email, email_verified, picture }) =>
  axios.post(routes.usersBase, {
    username: name,
    email,
    email_verified,
    picture,
  });

export const fetchUser = ({ userId, username }) => {
  if (userId) return fetchUserById(userId);
  else if (username) return fetchUserByUsername(username);
  return null;
};

const fetchUserById = (userId) =>
  axios.get(routes.buildFetchUserByIdRoute(userId));

const fetchUserByUsername = (username) =>
  axios.get(routes.usersBase, { params: { username } });
