import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userinfo: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // SYSTEM FOR SIGNUP AND ONBOARDING
    setUserInfo: (state, action) => {
      localStorage.setItem("userinfo", JSON.stringify(action.payload));
      state.userinfo = action.payload;
    },
    // AUTHENTICATION
    setAuth: (state, action) => {
      localStorage.setItem("auth", JSON.stringify(action.payload));
      state.auth = action.payload;
    },
  },
});

export const {
  setUserInfo,
  setAuth,
} = dataSlice.actions;

export default dataSlice.reducer;