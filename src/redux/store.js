import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import birthReducer from "./birthSlice";
import deathReducer from "./deathSlice"
import attestReducer from "./attestSlice"
import stillReducer from "./stillSlice"
export default configureStore({
  reducer: {
    header: headerReducer,
    birth:birthReducer,
    death:deathReducer,
    attest:attestReducer,
    still:stillReducer
  },
});
