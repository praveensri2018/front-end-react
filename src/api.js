import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

export const api = axios.create({
  baseURL: BASE_URL,
});