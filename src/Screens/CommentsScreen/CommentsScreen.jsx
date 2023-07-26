import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";

import { styles } from "./StyledCommentsScreen";
import { StyledContainer } from "../../default-styles";
import { ScrollView } from "react-native";
import SendCommentButton from "../../img/icons/IconsComponents/SendCommentButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromFirestore } from "../../redux/posts/operations";

import { addCommentsToDB } from "../../helpers/addComments";

import { generateRandomString } from "../../helpers/generateUniqueString";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../config";
import getMonth from "../../helpers/getMonth";
import { selectName } from "../../redux/auth/selectors";

export default function CommentsScreen({ route }) {
  const [photoComment, setPhotoComment] = useState("");
  const [userComments, setUserComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);
  const [isBtnDisbled, setIsBtnDisabled] = useState(true);
  const userName = useSelector(selectName);

  useEffect(() => {
    const dbRef = collection(db, "posts");
    const unsubscribe = onSnapshot(dbRef, (docsSnap) => {
      const updatedPosts = docsSnap.docs.map((doc) => doc.data());
      const findedPost = updatedPosts.find(
        (post) => post.docId === route.params.docId
      );
      const commentLenght = findedPost.comments.length;
      setUserComments(findedPost.comments.reverse());
      setCommentsCount(commentLenght);
    });
    return () => unsubscribe();
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    photoComment === "" ? setIsBtnDisabled(true) : setIsBtnDisabled(false);
  }, [photoComment]);

  const handleAddComment = () => {
    const photoCommentObj = {
      userName: userName,
      photoComment,
      photoCommenId: generateRandomString(10),
      dayOfMonth: new Date().getDate(),
      month: getMonth(),
      year: new Date().getFullYear(),
      hour: new Date().getHours(),
      minutes: new Date().getMinutes(),
    };

    const ref = doc(db, "posts", route.params.docId);
    updateDoc(ref, {
      commentsCount: commentsCount + 1,
    });

    addCommentsToDB("posts", route.params.docId, photoCommentObj);

    dispatch(getDataFromFirestore());
    setPhotoComment("");
  };

  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={{ marginTop: 32 }}>
      <KeyboardAvoidingView
        behavior={"position"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 210 : -40}
      >
        <View style={StyledContainer}>
          <View style={styles.commentedPhoto}>
            <Image
              source={{ uri: route.params.url }}
              style={{ width: "100%", height: "100%" }}
            ></Image>
          </View>
          <ScrollView
            style={{ height: windowHeight - 490 }}
            showsVerticalScrollIndicator={false}
          >
            {userComments.map((comment) => (
              <View key={comment.photoCommenId} style={styles.visitorComment}>
                {/* <View style={styles.commentsUserPhoto}> */}
                {/* <Image
                    style={{ width: "100%", height: "100%" }}
                    source={require("../../img/PhotoBG.jpg")}
                  ></Image> */}
                <Text
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                  }}
                >
                  {comment.userName}
                </Text>
                {/* </View> */}
                <View style={styles.commentTextContainer}>
                  <Text style={{ marginBottom: 8 }}>
                    {comment.photoComment}
                  </Text>
                  <Text style={styles.commentDateNow}>
                    {/* 09 червня, 2020 | 08:40 */}
                    {`${comment.dayOfMonth} ${comment.month}, ${
                      comment.year
                    } | ${comment.hour}:${
                      comment.minutes < 10
                        ? `0${comment.minutes}`
                        : comment.minutes
                    } `}
                  </Text>
                </View>
              </View>
            ))}

            {/* Owner comment */}
            {/* <View style={styles.ownerComment}>
              <View style={styles.commentsUserPhoto}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={require("../../img/PhotoBG.jpg")}
                ></Image>
              </View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.commentText}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, illo provident nisi repellendus animi dolore minima
                  incidunt facilis. Debitis, nostrum!
                </Text>
                <Text style={styles.commentDateNow}>
                  09 червня, 2020 | 08:40
                </Text>
              </View>
            </View> */}
          </ScrollView>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Коментувати..."
              placeholderTextColor={"#BDBDBD"}
              style={styles.commentInput}
              value={photoComment}
              onChangeText={setPhotoComment}
            ></TextInput>
            <Pressable
              style={styles.sendCommentIconWrapper}
              onPress={handleAddComment}
              disabled={isBtnDisbled}
            >
              <SendCommentButton
                fill={isBtnDisbled ? "#E8E8E8" : "#FF6C00"}
                // arrowFill={isBtnDisbled ? "#000" : "#FFF"}
              />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
