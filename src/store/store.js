
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: {
    data: rootReducer,
  },
});

export default store;

