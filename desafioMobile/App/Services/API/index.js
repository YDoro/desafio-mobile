import axios from "axios";
const api  = axios.create({
    baseURL: "https://desafio.mobfiq.com.br/",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }
  });
export default api;