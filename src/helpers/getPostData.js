import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config";

export const getPostData = async (docId) => {
  const docRef = doc(db, "posts", docId);
  const postData = await getDoc(docRef);
  return postData.data();
};
