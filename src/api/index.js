import axios from "axios";

const url = "http://localhost:5000/";

export const fetchPosts = (Data) => axios.get(`${url}posts`);
export const signup = (userData) => axios.post(`${url}user/signup`, userData);
export const login = (loginData) => axios.post(`${url}user/login`, loginData);
