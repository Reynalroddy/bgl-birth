import axios from "axios";
const authFetch = axios.create({
  baseURL: "https://npc-api.dsaved.com/v0/",
});

authFetch.interceptors.request.use(
  function (req) {
    const token = localStorage.getItem("token");

    if (token) {
      const toks = localStorage.getItem("token");
      req.headers.authorization = `Bearer ${toks}`;
      return req;
    }
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default authFetch;