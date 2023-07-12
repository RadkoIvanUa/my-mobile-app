import "react-native-gesture-handler";

import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen/CreatePostsScreen";

import CommentsScreen from "./src/Screens/CommentsScreen/CommentsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen/ProfileScreen";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import MapScreen from "./src/Screens/MapScreen/MapScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import LogOutIcon from "./src/img/icons/IconsComponents/LogOutIcon";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./src/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerStyle: {
              height: 0,
            },
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: {
              height: 0,
            },
            headerLeft: null,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: null,
            headerShown: false,
            headerLeft: null,
          }}
        />
        {/* <CreatePostsScreen /> */}
        {/* <CommentsScreen /> */}
        {/* <MapScreen /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
