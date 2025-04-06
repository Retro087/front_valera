import axios from "axios";

let instance = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Interceptor для автоматического добавления токена и обновления при необходимости
instance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export let api = {};

api.flowersAPI = {
  getFlowers(page, limit) {
    return instance.get(`flowers/`).then((response) => response.data);
  },
  getFlowerById(id) {
    return instance.get(`flowers/${id}`).then((response) => response.data);
  },
};

api.authAPI = {
  authMe() {
    return instance.get(`auth/authMe`).then((response) => response.data);
  },
  logIn(email, password) {
    return instance
      .post(`auth/login`, { email, password })
      .then((responce) => responce.data);
  },
  reg(email, password, username) {
    return instance
      .post(`auth/register`, { email, password, username })
      .then((responce) => responce.data);
  },
};
