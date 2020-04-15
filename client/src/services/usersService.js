import axios from 'axios';
import { usersBasePath } from '../constants/backendPaths';

export const addUser = ({ name, email, email_verified }) =>
  axios.post(usersBasePath, { username: name, email, email_verified });

export const getUser = username =>
  axios.get(usersBasePath, { params: { username } });
