import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import birthReducer from "./birthSlice";
import deathReducer from "./deathSlice"
export default configureStore({
  reducer: {
    header: headerReducer,
    birth:birthReducer,
    death:deathReducer
  },
});
