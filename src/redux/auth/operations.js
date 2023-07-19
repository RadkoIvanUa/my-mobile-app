import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerDB = createAsyncThunk(
  "auth/register",
  async ({ email, password }) => {
    try {
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      console.log(resp);
      return resp;
    } catch (error) {
      throw error;
    }
  }
);
