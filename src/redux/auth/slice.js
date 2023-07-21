import { createSlice } from "@reduxjs/toolkit";
import {
  logOut,
  loginDB,
  registerDB,
  writeUserDataToFirestore,
} from "./operations";

const initialState = {
  user: { name: null, email: null, uid: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerDB.fulfilled, (state, action) => {
        state.user.name = action.payload.user.displayName;
        state.user.email = action.payload.user.email;
        state.token = action.payload.user.accessToken;
        state.user.uid = action.payload.user.uid;
        state.isLoggedIn = true;
      })
      .addCase(loginDB.fulfilled, (state, action) => {
        state.user.name = action.payload.user.displayName;
        state.user.email = action.payload.user.email;
        state.token = action.payload.user.accessToken;
        state.user.uid = action.payload.user.uid;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.uid = null;
        state.isLoggedIn = false;
      }),
});

export default authSlice;
