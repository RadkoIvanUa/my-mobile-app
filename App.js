import { StyleSheet, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import CreatePostsScreen from "./src/Screens/CreatePostsScreen/CreatePostsScreen";
import { StyledContainer } from "./src/default-styles";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./src/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      {/* <ImageBackground
        source={require("./src/img/PhotoBG.jpg")}
        style={{ height: "100%" }}
      >
        <View style={{ flexGrow: 1 }}></View>
        <RegistrationScreen />
        <LoginScreen />
      </ImageBackground> */}
      <CreatePostsScreen />
    </View>
  );
}
