import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import LogOutIcon from "../../img/icons/IconsComponents/LogOutIcon";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import BackArrow from "../../img/icons/IconsComponents/BackArrow";
import { Platform } from "react-native";
import HomeNavigationIcon from "../../img/icons/IconsComponents/HomeNavigationIcon";
import NavigationAddPost from "../../img/icons/IconsComponents/NavigationAddPost";
import ProfileNavigationIcon from "../../img/icons/IconsComponents/ProfileNavigationIcon";
import { Pressable } from "react-native";
import NavigationIconWrapper from "../../components/NavigationIconWrapper";

import { logOut } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { getDataFromFirestore } from "../../redux/posts/operations";
import { useEffect } from "react";
import { selectIsPostUploaded } from "../../redux/posts/selectors";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
  const isPostUploaded = useSelector(selectIsPostUploaded);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromFirestore());
  }, [isPostUploaded, isLoggedIn]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Posts") {
            if (focused) {
              return <HomeNavigationIcon stroke={"#FF6C00"} />;
            }
            return <HomeNavigationIcon stroke={"#212121"} />;
          } else if (route.name === "CreatePost") {
            return (
              <NavigationIconWrapper>
                <NavigationAddPost fill={"#fff"} />
              </NavigationIconWrapper>
            );
          } else if (route.name === "Profile") {
            if (focused) {
              return <ProfileNavigationIcon stroke={"#FF6C00"} />;
            }
            return <ProfileNavigationIcon stroke={"#212121"} />;
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          alignItems: "center",
          paddingLeft: 65,
          paddingRight: 65,

          paddingBottom: 34,
          ...Platform.select({
            ios: {
              height: 83,
              paddingTop: 10,
            },
            android: {
              paddingTop: 30,
            },
          }),
        },
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

          headerRight: () => (
            <Pressable
              onPress={() => {
                dispatch(logOut());
              }}
            >
              <LogOutIcon />
            </Pressable>
          ),
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

          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate("Posts")}>
              <BackArrow />
            </Pressable>
          ),

          headerLeftContainerStyle: {
            left: 16,
          },
          tabBarStyle: {
            display: "none",
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
