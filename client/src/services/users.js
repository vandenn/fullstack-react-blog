import axios from 'axios';
import { usersBasePath } from '../constants/backendPaths';

export const addUser = ({ name, email, email_verified, picture }) =>
  axios.post(usersBasePath, { username: name, email, email_verified, picture });

export const getUser = username =>
  axios.get(usersBasePath, { params: { username } });
