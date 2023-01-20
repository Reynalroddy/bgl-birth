import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import birthReducer from "./birthSlice";
export default configureStore({
  reducer: {
    header: headerReducer,
    birth:birthReducer
  },
});
