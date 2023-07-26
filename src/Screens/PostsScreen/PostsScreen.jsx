import { View, Text, Image, ScrollView, Pressable } from "react-native";

import { styles } from "./StyledPostsScreen";
import { StyledContainer } from "../../default-styles";
import CommentsIcon from "../../img/icons/IconsComponents/CommentsIcon";
import LocationIcon from "../../img/icons/IconsComponents/LocationIcon";
import LikeIcons from "../../img/icons/IconsComponents/LikeIcons";
import NoCommentsIcon from "../../img/icons/IconsComponents/NoCommentsIcon";
import { useSelector } from "react-redux";
import { selectEmail, selectName } from "../../redux/auth/selectors";
import getUserPostsArr from "../../helpers/getUserPostsArr";

export default function PostsScreen({ navigation }) {
  const userName = useSelector(selectName);
  const userEmail = useSelector(selectEmail);
  const userPostsArr = getUserPostsArr();
  const sortedUserPostsArr = userPostsArr.sort(
    (a, b) => a.timestamp - b.timestamp
  );

  return (
    <>
      <View style={{ ...StyledContainer, marginTop: 32 }}>
        <View style={styles.userInfo}>
          <View style={styles.userPhotoThumb}>
            <Image
              source={require("../../img/user-photo.jpg")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.userEmail}>{userEmail}</Text>
          </View>
        </View>

        <ScrollView
          style={styles.profilePostList}
          showsVerticalScrollIndicator={false}
        >
          {sortedUserPostsArr.reverse().map((post) => (
            <View key={post.photoUrl} style={styles.profilePostItem}>
              <View style={styles.postPhoto}>
                <Image
                  source={{ uri: post.photoUrl }}
                  style={{ width: "100%", height: "100%" }}
                ></Image>
              </View>
              <Text style={styles.photoName}>{post.photoName}</Text>
              <View style={styles.postInfoFlex}>
                <View style={styles.postLeftSideFlexItem}>
                  <Pressable
                    style={{ ...styles.postComents, ...styles.postInfo }}
                    onPress={() => {
                      navigation.navigate("Comments", {
                        url: post.photoUrl,
                        docId: post.docId,
                      });
                    }}
                  >
                    {post.commentsCount === 0 ? (
                      <NoCommentsIcon />
                    ) : (
                      <CommentsIcon />
                    )}
                    <Text>{post.commentsCount}</Text>
                  </Pressable>
                  <View style={{ ...styles.postLikes, ...styles.postInfo }}>
                    <LikeIcons />
                    <Text>456</Text>
                  </View>
                </View>
                <Pressable
                  style={{ ...styles.postLocation, ...styles.postInfo }}
                  onPress={() =>
                    navigation.navigate(
                      "Map",
                      post.location
                        ? {
                            location: {
                              latitude: post.location.latitude,
                              longitude: post.location.longitude,
                            },
                          }
                        : {
                            location: {
                              latitude: 0,
                              longitude: 0,
                            },
                          }
                    )
                  }
                >
                  <LocationIcon />
                  <Text style={styles.locationText}>{post.photoLocation}</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
