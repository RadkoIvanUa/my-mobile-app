import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import CommentsScreen from "./src/Screens/CommentsScreen/CommentsScreen";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import MapScreen from "./src/Screens/MapScreen/MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable } from "react-native";
import BackArrow from "./src/img/icons/IconsComponents/BackArrow";

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
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={({ navigation }) => ({
            title: "Коментарі",
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
              <Pressable onPress={() => navigation.navigate("Home")}>
                <BackArrow />
              </Pressable>
            ),

            headerLeftContainerStyle: {
              left: 16,
            },
            tabBarStyle: {
              display: "none",
            },
          })}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={({ navigation }) => ({
            title: "Карта",
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
              <Pressable onPress={() => navigation.navigate("Home")}>
                <BackArrow />
              </Pressable>
            ),

            headerLeftContainerStyle: {
              left: 16,
            },
            tabBarStyle: {
              display: "none",
            },
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
    // <MapScreen />
  );
}
