import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";

import { styles } from "./StyledPostsScreen";
import { StyledContainer } from "../../default-styles";
import CommentsIcon from "../../img/icons/IconsComponents/CommentsIcon";
import LocationIcon from "../../img/icons/IconsComponents/LocationIcon";
import LikeIcons from "../../img/icons/IconsComponents/LikeIcons";
import HomeNavigationIcon from "../../img/icons/IconsComponents/HomeNavigationIcon";
import ProfileNavigationIcon from "../../img/icons/IconsComponents/ProfileNavigationIcon";
import NavigationAddPost from "../../img/icons/IconsComponents/NavigationAddPost";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

export default function PostsScreen() {
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
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>

        <ScrollView
          style={styles.profilePostList}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.profilePostItem}>
            <View style={styles.postPhoto}>
              <Image
                source={require("../../img/PhotoBG.jpg")}
                style={{ width: "100%", height: "100%" }}
              ></Image>
            </View>
            <Text style={styles.photoName}>photoName</Text>
            <View style={styles.postInfoFlex}>
              <View style={styles.postLeftSideFlexItem}>
                <View style={{ ...styles.postComents, ...styles.postInfo }}>
                  <CommentsIcon />
                  <Text>14</Text>
                </View>
                <View style={{ ...styles.postLikes, ...styles.postInfo }}>
                  <LikeIcons />
                  <Text>456</Text>
                </View>
              </View>
              <View style={{ ...styles.postLocation, ...styles.postInfo }}>
                <LocationIcon />
                <Text style={styles.locationText}>Ukraine</Text>
              </View>
            </View>
          </View>
          <View style={styles.profilePostItem}>
            <View style={styles.postPhoto}>
              <Image
                source={require("../../img/test-photo.jpg")}
                style={{ width: "100%", height: "100%" }}
              ></Image>
            </View>
            <Text style={styles.photoName}>photoName</Text>
            <View style={styles.postInfoFlex}>
              <View style={styles.postLeftSideFlexItem}>
                <View style={{ ...styles.postComents, ...styles.postInfo }}>
                  <CommentsIcon />
                  <Text>14</Text>
                </View>
                <View style={{ ...styles.postLikes, ...styles.postInfo }}>
                  <LikeIcons />
                  <Text>456</Text>
                </View>
              </View>
              <View style={{ ...styles.postLocation, ...styles.postInfo }}>
                <LocationIcon />
                <Text style={styles.locationText}>Ukraine</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* <View style={styles.profileNavigation}>
        <View style={styles.profileNavigationWrapper}>
          <Pressable style={styles.featcherIcon}>
            <HomeNavigationIcon />
          </Pressable>
          <Pressable style={styles.featcherIcon}>
            <View style={styles.ProfileNavigationIconWrapper}>
              <NavigationAddPost fill={"#fff"} />
            </View>
          </Pressable>
          <Pressable style={styles.featcherIcon}>
            <ProfileNavigationIcon stroke={"#212121"} />
          </Pressable>
        </View>
      </View> */}
    </>
  );
}
