import { View, Text, Image, ScrollView, Pressable } from "react-native";

import { styles } from "./StyledPostsScreen";
import { StyledContainer } from "../../default-styles";
import CommentsIcon from "../../img/icons/IconsComponents/CommentsIcon";
import LocationIcon from "../../img/icons/IconsComponents/LocationIcon";
import LikeIcons from "../../img/icons/IconsComponents/LikeIcons";

export default function PostsScreen({ navigation }) {
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
                <Pressable
                  style={{ ...styles.postComents, ...styles.postInfo }}
                  onPress={() => navigation.navigate("Comments")}
                >
                  <CommentsIcon />
                  <Text>14</Text>
                </Pressable>
                <View style={{ ...styles.postLikes, ...styles.postInfo }}>
                  <LikeIcons />
                  <Text>456</Text>
                </View>
              </View>
              <Pressable
                style={{ ...styles.postLocation, ...styles.postInfo }}
                onPress={() => navigation.navigate("Map")}
              >
                <LocationIcon />
                <Text style={styles.locationText}>Ukraine</Text>
              </Pressable>
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
                <Pressable
                  style={{ ...styles.postComents, ...styles.postInfo }}
                  onPress={() => navigation.navigate("Comments")}
                >
                  <CommentsIcon />
                  <Text>14</Text>
                </Pressable>
                <View style={{ ...styles.postLikes, ...styles.postInfo }}>
                  <LikeIcons />
                  <Text>456</Text>
                </View>
              </View>
              <Pressable
                style={{ ...styles.postLocation, ...styles.postInfo }}
                onPress={() => navigation.navigate("Map")}
              >
                <LocationIcon />
                <Text style={styles.locationText}>Ukraine</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
