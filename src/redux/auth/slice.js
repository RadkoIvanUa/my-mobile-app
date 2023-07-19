import { createSlice } from "@reduxjs/toolkit";
import { registerDB } from "./operations";

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
    builder.addCase(registerDB.fulfilled, (state, action) => {
      console.log(action);
    }),
});

export default authSlice;
