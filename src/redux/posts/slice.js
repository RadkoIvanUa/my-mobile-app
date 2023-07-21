import { createSlice } from "@reduxjs/toolkit";
import { getDataFromFirestore, writeDataToFirestore } from "./operations";
import { useSelector } from "react-redux";
import { selectUserUid } from "../auth/selectors";

const initialState = {
  postsArr: [],
  test: "test",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(getDataFromFirestore.fulfilled, (state, action) => {
      state.photoArr = action.payload;
      console.log(state.photoArr);
    }),
});
