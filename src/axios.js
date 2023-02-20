import axios from "axios";
const authFetch = axios.create({
  baseURL: "https://npc-api.dsaved.com/v0/",
});





authFetch.interceptors.request.use(
  function (req) {
    // const token = localStorage.getItem("token");
    const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX0lEIjo0LCJMR0FfSUQiOjMwOSwiUmVnX0NlbnRlcl9JRCI6MTM0MiwiVXNlck5hbWUiOiJLRVNUT04iLCJSb2xlX0lEIjpudWxsLCJFbWFpbCI6Imtlc3RvbkBlbWFpbC5jb20iLCJpYXQiOjE2NzY5MDQxOTAsImV4cCI6MTY3Njk4Njk5MH0.iVquXjxce0UPRz9J4jVIsnFjYU4HprNSlyNwSC6DX0o"
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