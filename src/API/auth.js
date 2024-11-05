import axios from "axios";

const API_URL = "http://localhost:3000/users";

export const register = async (email, password) => {
  return axios.post(`${API_URL}/signup`, { email, password });
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};