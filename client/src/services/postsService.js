import axios from 'axios';
import { postsBasePath } from '../constants/backendPaths';

export const fetchAllPosts = () => {
  return axios.get(postsBasePath);
};
