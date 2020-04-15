import axios from 'axios';
import { postsBasePath } from '../constants/backendPaths';

export const fetchAllPosts = () => {
  return axios.get(postsBasePath);
};

export const addPost = ({ title, body, uid }) => {
  return axios.post(postsBasePath, { title, body, uid });
};
