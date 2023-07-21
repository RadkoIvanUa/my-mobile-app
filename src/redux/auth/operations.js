import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const registerDB = createAsyncThunk(
  "auth/register",
  async ({ email, password, login }) => {
    try {
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, { displayName: login });
      }
      return resp;
    } catch (error) {
      throw error;
    }
  }
);

export const loginDB = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      return resp;
    } catch (error) {
      throw error;
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    const resp = await signOut(auth);
    return resp;
  } catch (error) {
    throw error;
  }
});
