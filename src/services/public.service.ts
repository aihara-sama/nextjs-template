import axios from "axios";

const BASE_URL = "<URL>";

const publicClient = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

const publicService = {};

export default publicService;
