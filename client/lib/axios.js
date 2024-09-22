import axios from "axios";

const $axios = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000, //5s
});
