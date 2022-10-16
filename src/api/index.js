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

//FETCH STULANCERS
export const fetchPosts = ({ service }) => API.get(`/posts/${service}`);

//SIGN UP HIRER
export const signup = (userData) => API.post('/user/signup', userData);

//SIGN UP SERVICE PROVIDER
export const signupserviceprovider = (userData) =>
  API.post('/user/signupservice', userData);

//LOGIN HIRER
export const loginhirer = (loginData) =>
  API.post('/user/loginhirer', loginData);

//LOGIN SERVICE PROVIDER
export const loginservicer = (loginData) =>
  API.post('/user/loginservicer', loginData);

//TAKE BIO,PROFILE PIC,TELEPHONE NUMBER,WHATSAPP LINK
export const freelancerinfo = (freelancerData, freelancerId) =>
  API.patch(`/user/signupservice/${freelancerId}`, freelancerData);

//TAKE STARTING PRICE AND 3 BRANDING PICS
export const otherfreelancerinfo = (freelancerData, freelancerId) =>
  API.patch(`/user/signupservice/${freelancerId}`, freelancerData);

//UPDATE STULANCER INFO
export const updatefreelancerinfo = (freelancerData, freelancerId) =>
  API.patch(`/user/updateservice/${freelancerId}`, freelancerData);

//UPDATE HIRER INFO
export const updatehirerinfo = (hirerData, hirerId) =>
  API.patch(`/user/updatehirer/${hirerId}`, hirerData);
export const forgotpassword = (forgotpasswordData) => {
  API.post('/passwordrecovery/forgot-password', forgotpasswordData);
  console.log(`hmm  ${forgotpasswordData}`);
};

//FEEDBACK
export const feedback = (feedbackData) =>
  API.post('/user/feedback', feedbackData);

//UPDATE BRAND PICS ONLY
export const updatebrandpics = (freelancerData, freelancerId) =>
  API.patch(`/user/updatebrandpics/${freelancerId}`, freelancerData);
