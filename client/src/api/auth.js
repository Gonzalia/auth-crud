import axios from "./axios";

export const registerRequest = (body) => axios.post(`/register`, body);

export const loginRequest = (body) => axios.post(`/login`, body);

export const verifyTokenRequest = () => axios.get("/verify-token");
