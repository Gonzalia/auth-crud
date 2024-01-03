import axios from "axios";
const API = "http://localhost:3000/api";

export const registerRequest = (body) => axios.post(`${API}/register`, body);

export const loginRequest = (body) => axios.post(`${API}/login`, body);
