import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const fetchPosts = ({ service }) => API.get(`/posts/${service}`);
export const signup = (userData) => API.post('/user/signup', userData);
export const signupserviceprovider = (userData) =>
  API.post('/user/signupservice', userData);
export const loginhirer = (loginData) =>
  API.post('/user/loginhirer', loginData);
export const loginservicer = (loginData) =>
  API.post('/user/loginservicer', loginData);
export const freelancerinfo = (freelancerData, freelancerId) =>
  API.patch(`/user/signupservice/${freelancerId}`, freelancerData);
