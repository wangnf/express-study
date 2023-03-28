import axios from "axios";

const BASE_URL = "http://localhost:9001";

const makeRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

export default makeRequest;