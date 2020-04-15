import axios from 'axios';
import { postsBaseRoute } from '../constants/backendRoutes';

export const fetchAllPosts = () => {
  return axios.get(postsBaseRoute);
};

export const addPost = ({ title, body, uid }) => {
  return axios.post(postsBaseRoute, { title, body, uid });
};
