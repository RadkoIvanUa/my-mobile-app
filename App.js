import {
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen/CreatePostsScreen";
import { StyledContainer } from "./src/default-styles";
import CommentsScreen from "./src/Screens/CommentsScreen/CommentsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen/ProfileScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./src/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* <ImageBackground
        source={require("./src/img/PhotoBG.jpg")}
        style={{ height: "100%" }}
      >
        <View style={{ flexGrow: 1 }}></View>
        <RegistrationScreen />
        <LoginScreen />
      </ImageBackground> */}
      {/* <CreatePostsScreen /> */}
      {/* <CommentsScreen /> */}
      <ImageBackground
        source={require("./src/img/PhotoBG.jpg")}
        style={{ height: "100%" }}
      >
        <View style={{ flexGrow: 1 }}></View>
        <ProfileScreen />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
