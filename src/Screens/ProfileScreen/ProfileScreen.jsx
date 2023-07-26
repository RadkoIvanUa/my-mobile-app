import {
  Image,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import { styles } from "./StyledProfileScreen";
import RemoveUserPhotoIcon from "../../img/icons/IconsComponents/RemoveUserPhotoIcon";
import LogOutIcon from "../../img/icons/IconsComponents/LogOutIcon";
import { StyledContainer } from "../../default-styles";
import NoCommentsIcon from "../../img/icons/IconsComponents/NoCommentsIcon";
import CommentsIcon from "../../img/icons/IconsComponents/CommentsIcon";
import LikeIcons from "../../img/icons/IconsComponents/LikeIcons";
import LocationIcon from "../../img/icons/IconsComponents/LocationIcon";

import getUserPostsArr from "../../helpers/getUserPostsArr";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
export default function ProfileScreen({ navigation }) {
  const userPostsArr = getUserPostsArr();
  const sortedUserPostsArr = userPostsArr.sort(
    (a, b) => a.timestamp - b.timestamp
  );
  const dispatch = useDispatch();

  return (
    <ImageBackground
      source={require("../../img/PhotoBG.jpg")}
      style={{ height: "100%" }}
    >
      <View style={styles.profileWrapper}>
        <Pressable
          onPress={() => {
            dispatch(logOut());
          }}
          style={styles.logOutIcon}
        >
          <LogOutIcon />
        </Pressable>
        <View style={styles.photoSpace}>
          <Image
            source={require("../../img/user-photo.jpg")}
            style={styles.profileImg}
          />
          <View style={styles.removeUserPhotoIcon}>
            <RemoveUserPhotoIcon />
          </View>
        </View>
        <View style={StyledContainer}>
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
                      onPress={() =>
                        navigation.navigate("Comments", {
                          url: post.photoUrl,
                          docId: post.docId,
                        })
                      }
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
                    <Text style={styles.locationText}>
                      {post.photoLocation}
                    </Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}
