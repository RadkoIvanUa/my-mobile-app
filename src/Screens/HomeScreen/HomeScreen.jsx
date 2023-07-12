import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import LogOutIcon from "../../img/icons/IconsComponents/LogOutIcon";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import BackArrow from "../../img/icons/IconsComponents/BackArrow";
import { Platform, View } from "react-native";
import HomeNavigationIcon from "../../img/icons/IconsComponents/HomeNavigationIcon";
import LikeIcons from "../../img/icons/IconsComponents/LikeIcons";
import NavigationAddPost from "../../img/icons/IconsComponents/NavigationAddPost";
import ProfileNavigationIcon from "../../img/icons/IconsComponents/ProfileNavigationIcon";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { styles } from "../CommentsScreen/StyledCommentsScreen";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Posts") {
            return <HomeNavigationIcon />;
          } else if (route.name === "CreatePost") {
            return <NavigationAddPost fill={"#212121"} />;
          } else if (route.name === "Profile") {
            return <ProfileNavigationIcon stroke={"#212121"} />;
          }
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerStyle: {},
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#212121",
            textAlign: "center",
            fontFamily: "Roboto-Bold",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },

          headerRight: () => <LogOutIcon />,
          headerRightContainerStyle: {
            right: 16,
          },
        }}
      />

      <Tab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#212121",
            textAlign: "center",
            fontFamily: "Roboto-Bold",
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          // Custom Header
          // header: ({ navigation, route, options, back }) => {
          //   return (
          //     <View style={styles.screenHeader}>
          //       <Pressable style={styles.screenHeaderArrowLeftIcon}>
          //         <BackArrow onPress={navigation.goBack} />
          //       </Pressable>
          //       <Text style={styles.screenHeaderText}>Створити публікацію</Text>
          //     </View>
          //   );
          // },

          headerLeft: () => (
            <Pressable onPress={() => console.log("go back pressed")}>
              <BackArrow />
            </Pressable>
          ),

          headerLeftContainerStyle: {
            left: 16,
          },
          tabBarStyle: {
            // display: "none",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
