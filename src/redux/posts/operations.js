import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateDataInFirestore } from "../../helpers/getUserPostsArr";

export const writeDataToFirestore = createAsyncThunk(
  "posts/writeDataToFirestore",
  async (photoData) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        photoUrl: photoData.url,
        photoName: photoData.photoName,
        photoLocation: photoData.photoLocation,
        location: photoData.location,
        timestamp: Date.now(),
        uid: "",
        docId: "",
        comments: [],
        commentsCount: 0,
      });

      const ref = doc(db, "posts", docRef.id);
      await updateDoc(ref, {
        uid: docRef.firestore._firestoreClient.user.uid,
        docId: docRef.id,
      });

      return docRef;
    } catch (error) {
      throw error;
    }
  }
);

export const getDataFromFirestore = createAsyncThunk(
  "posts/getDateFromFirestore",
  async () => {
    try {
      const snapshot = await getDocs(collection(db, "posts"));
      const allPosts = [];
      snapshot.forEach((doc) => allPosts.push(doc.data()));
      return allPosts;
    } catch (error) {
      throw error;
    }
  }
);

export const getUserPostsData = createAsyncThunk(
  "posts/getUserPostsData",
  async (docId) => {
    try {
      const docRef = doc(db, "posts", docId);
      const postData = await getDoc(docRef);
      return postData.data();
    } catch (error) {
      throw error;
    }
  }
);
