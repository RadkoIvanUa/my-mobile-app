import { createSlice } from "@reduxjs/toolkit";
import {
  addCommentToPhoto,
  addCommentsToStore,
  getDataFromFirestore,
  getUserPostsData,
  writeDataToFirestore,
} from "./operations";
import { useSelector } from "react-redux";
import { selectUserUid } from "../auth/selectors";
import { logOut } from "../auth/operations";

const initialState = {
  postsArr: [],
  isPostUploaded: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(writeDataToFirestore.pending, (state) => {
        state.isPostUploaded = false;
      })
      .addCase(writeDataToFirestore.fulfilled, (state) => {
        state.isPostUploaded = true;
      })
      .addCase(writeDataToFirestore.rejected, (state) => {
        state.isPostUploaded = false;
      })
      .addCase(getDataFromFirestore.fulfilled, (state, action) => {
        state.postsArr = action.payload;
        state.isCommentsAdded = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.postsArr = [];
        state.comments = [];
      }),
});
