import axios from 'axios';
import * as routes from '../constants/backendRoutes';

export const fetchAllPosts = () => {
  return axios.get(routes.postsBase);
};

export const addPost = ({ title, body, uid }) => {
  return axios.post(routes.postsBase, { title, body, uid });
};
