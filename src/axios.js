import axios from "axios";
const authFetch = axios.create({
  baseURL: "https://npc-api.dsaved.com/v0/",
});





authFetch.interceptors.request.use(
  function (req) {
    // const token = localStorage.getItem("token");
    const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX0lEIjoxNjc0NSwiTEdBX0lEIjowLCJSZWdfQ2VudGVyX0lEIjowLCJVc2VyTmFtZSI6IkRvbGFwbyIsIlJvbGVfSUQiOjUsIlN0YXRlX0lEIjo3LCJFbWFpbCI6ImRvbGFwb0BlbWFpbC5jb20iLCJpYXQiOjE2NzgwOTM1MTksImV4cCI6MTY3ODE3NjMxOX0.r_qkocnSrSSqKPFwVdlupgQ7gyGQkbjxvf0cd7J3nfM"
    if (token) {
      // const toks = localStorage.getItem("token");
      req.headers.authorization = `Bearer ${token}`;
      return req;
    }
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default authFetch;