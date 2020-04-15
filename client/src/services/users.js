import axios from 'axios';
import * as routes from '../constants/backendRoutes';

export const addUser = ({ name, email, email_verified, picture }) =>
  axios.post(routes.usersBase, {
    username: name,
    email,
    email_verified,
    picture
  });

export const getUser = username =>
  axios.get(routes.usersBase, { params: { username } });
