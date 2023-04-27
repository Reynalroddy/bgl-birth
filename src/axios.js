import axios from "axios";
const authFetch = axios.create({
  baseURL: "https://npc-api.dsaved.com/v0/",
});





authFetch.interceptors.request.use(
  function (req) {
    // const token = localStorage.getItem("token");
    const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX0lEIjoiNCIsIkxHQV9JRCI6IjMwOSIsIlJlZ19DZW50ZXJfSUQiOiIxMzQyIiwiVXNlck5hbWUiOiJLRVNUT04iLCJSb2xlX0lEIjoiNSIsIlN0YXRlX0lEIjoiMTQiLCJFbWFpbCI6Imtlc3RvbkBlbWFpbC5jb20iLCJpYXQiOjE2ODI1MjM1NDUsImV4cCI6MTY4MjYwNjM0NX0.0T94Aj6DOxPTe3K2ZXIawxN16YODJczqMjM2MDCShhs"
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