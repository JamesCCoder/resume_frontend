import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://james-resume-backend-9a3094b7738e.herokuapp.com"
});

export default api;
