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
import HomeNavigationIcon from "../../img/icons/IconsComponents/HomeNavigationIcon";
import ProfileNavigationIcon from "../../img/icons/IconsComponents/ProfileNavigationIcon";
import NavigationAddPost from "../../img/icons/IconsComponents/NavigationAddPost";
export default function ProfileScreen() {
  return (
    <ImageBackground
      source={require("../../img/PhotoBG.jpg")}
      style={{ height: "100%" }}
    >
      <View style={styles.profileWrapper}>
        <Pressable style={styles.logOutIcon}>
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
              <ProfileNavigationIcon stroke={"#fff"} />
            </View>
          </Pressable>
          <Pressable style={styles.featcherIcon}>
            <NavigationAddPost fill={"#212121"} />
          </Pressable>
        </View>
      </View> */}
      </View>
    </ImageBackground>
  );
}
