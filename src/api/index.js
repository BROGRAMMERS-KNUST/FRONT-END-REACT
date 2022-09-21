import axios from "axios";

const url = "http://localhost:3000";

export const fetchPosts = axios.get(url);
