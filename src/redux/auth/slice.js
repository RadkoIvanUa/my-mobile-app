import { createSlice } from "@reduxjs/toolkit";
import { logOut, loginDB, registerDB } from "./operations";

const initialState = {
  user: { name: null, email: null, uid: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isGoingToLogIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerDB.pending, (state) => {
        state.isGoingToLogIn = true;
      })
      .addCase(registerDB.fulfilled, (state, action) => {
        state.user.name = action.payload.user.displayName;
        state.user.email = action.payload.user.email;
        state.token = action.payload.user.accessToken;
        state.user.uid = action.payload.user.uid;
        state.isLoggedIn = true;
        state.isGoingToLogIn = false;
      })
      .addCase(registerDB.rejected, (state) => {
        state.isGoingToLogIn = false;
      })
      .addCase(loginDB.pending, (state) => {
        state.isGoingToLogIn = true;
      })
      .addCase(loginDB.fulfilled, (state, action) => {
        state.user.name = action.payload.user.displayName;
        state.user.email = action.payload.user.email;
        state.token = action.payload.user.accessToken;
        state.user.uid = action.payload.user.uid;
        state.isLoggedIn = true;
        state.isGoingToLogIn = false;
      })
      .addCase(loginDB.rejected, (state) => {
        state.isGoingToLogIn = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.user.uid = null;
        state.token = null;
        state.isLoggedIn = false;
      }),
});

export default authSlice;
