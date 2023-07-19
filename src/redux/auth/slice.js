import { createSlice } from "@reduxjs/toolkit";
import { logOut, loginDB, registerDB } from "./operations";

const initialState = {
  user: { name: null, email: null },
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
        state.isLoggedIn = true;
      })
      .addCase(loginDB.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.user.displayName;
        state.user.email = action.payload.user.email;
        state.token = action.payload.user.accessToken;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user.name = null;
        state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
      }),
});

export default authSlice;
