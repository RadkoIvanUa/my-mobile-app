import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectUserUid } from "../auth/selectors";

export const writeDataToFirestore = createAsyncThunk(
  "posts/writeDataToFirestore",
  async (photoData) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        photoUri: photoData.uri,
        photoName: photoData.photoName,
        photoLocation: photoData.photoLocation,
        location: photoData.location,
        uid: "",
      });

      const ref = doc(db, "posts", docRef.id);
      await updateDoc(ref, {
        uid: docRef.firestore._firestoreClient.user.uid,
      });
      return docRef;
    } catch (error) {
      throw error;
    }
  }
);

export const getDataFromFirestore = createAsyncThunk(
  "posts/getDateFromFirestore",
  async (uid) => {
    try {
      const snapshot = await getDocs(collection(db, "posts"));
      const allPosts = [];
      snapshot.forEach((doc) => allPosts.push(doc.data()));
      return allPosts.filter((post) => post.uid === uid);
    } catch (error) {
      throw error;
    }
  }
);
