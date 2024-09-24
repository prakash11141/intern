import axios from "axios";

const $axios = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000, //5s
});
export default $axios;
