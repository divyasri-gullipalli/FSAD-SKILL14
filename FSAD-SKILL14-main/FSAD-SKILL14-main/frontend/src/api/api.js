import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const registerUser = (data) =>
  axios.post(`${BASE_URL}/register`, data);

export const loginUser = (data) =>
  axios.post(`${BASE_URL}/login`, data);

export const getUserProfile = (id) =>
  axios.get(`${BASE_URL}/user/${id}`);