import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config";

export const addCommentsToDB = async (collectionName, docId, comment) => {
  try {
    const ref = doc(db, collectionName, docId);

    await updateDoc(ref, {
      comments: arrayUnion(comment),
    });
    console.log("document updated");
  } catch (error) {
    console.log(error);
  }
};
