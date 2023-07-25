import { useSelector } from "react-redux";
import { selectUserUid } from "../redux/auth/selectors";
import { selectPostsArr } from "../redux/posts/selectors";
import { db } from "../../config";
import { doc, updateDoc } from "firebase/firestore";

export default function getUserPostsArr() {
  const postsArr = useSelector(selectPostsArr);
  const userUid = useSelector(selectUserUid);
  return postsArr.filter((post) => post.uid === userUid);
}
