import { createSlice } from "@reduxjs/toolkit";
import { getDataFromFirestore, writeDataToFirestore } from "./operations";
import { useSelector } from "react-redux";
import { selectUserUid } from "../auth/selectors";
import { logOut } from "../auth/operations";

const initialState = {
  postsArr: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getDataFromFirestore.fulfilled, (state, action) => {
        state.postsArr = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.postsArr = [];
      }),
});
