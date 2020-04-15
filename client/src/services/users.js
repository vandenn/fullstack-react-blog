import axios from 'axios';
import { usersBaseRoute } from '../constants/backendRoutes';

export const addUser = ({ name, email, email_verified, picture }) =>
  axios.post(usersBaseRoute, {
    username: name,
    email,
    email_verified,
    picture
  });

export const getUser = username =>
  axios.get(usersBaseRoute, { params: { username } });
