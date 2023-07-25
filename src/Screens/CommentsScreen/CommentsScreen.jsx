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
import {
  addCommentToPhoto,
  addCommentsToStore,
  getDataFromFirestore,
} from "../../redux/posts/operations";

import { addCommentsToDB } from "../../helpers/addComments";
import getUserPostsArr from "../../helpers/getUserPostsArr";

import { generateRandomString } from "../../helpers/generateUniqueString";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config";
import { getPostData } from "../../helpers/getPostData";
import {
  selectIsCommentsAdded,
  selectPostsArr,
  selectUserPostsData,
} from "../../redux/posts/selectors";

export default function CommentsScreen({ route }) {
  const [photoComment, setPhotoComment] = useState("");
  const [userPost, setUserPost] = useState([]);

  // let postsArr = [];
  // let filtered = [];

  // const dbRef = collection(db, "posts");
  // onSnapshot(dbRef, (docsSnap) => {
  //   docsSnap.forEach((doc) => {
  //     postsArr.push(doc.data());
  //   });

  //   filtered = postsArr.filter((post) => post.docId === route.params.docId);
  //   console.log(filtered);
  // });

  // const selectedUserArr = route.params.userPostsArr.filter(
  //   (post) => post.docId === route.params.docId
  // );

  const selectedUserArr = route.params.userPostsArr.filter(
    (post) => post.docId === route.params.docId
  );

  useEffect(() => {
    setUserPost(selectedUserArr);
  }, []);

  const dispatch = useDispatch();

  const handleAddComment = () => {
    const photoCommentObj = {
      photoComment,
      photoCommenId: generateRandomString(10),
    };

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
            {userPost.map((post) =>
              post.comments.map((comment) => (
                <View style={styles.visitorComment}>
                  <View style={styles.commentsUserPhoto}>
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={require("../../img/PhotoBG.jpg")}
                    ></Image>
                  </View>
                  <View style={styles.commentTextContainer}>
                    <Text>{comment.photoComment}</Text>
                    <Text style={styles.commentDateNow}>
                      09 червня, 2020 | 08:40
                    </Text>
                  </View>
                </View>
              ))
            )}

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
            >
              <SendCommentButton />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
