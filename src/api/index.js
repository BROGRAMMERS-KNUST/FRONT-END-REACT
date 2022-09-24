import axios from "axios";

const url = "http://localhost:5000/";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const signup = (userData) => axios.post(`${url}user/signup`, userData);
export const login = (loginData) => axios.post(`${url}user/login`, loginData);
