import {
  Text,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";

import { styles } from "../LoginScreen/StyledLoginScreen";
import { useState, useEffect } from "react";
import { btn } from "../../default-styles";
import { useDispatch, useSelector } from "react-redux";
import { loginDB } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function LoginScreen({ navigation }) {
  const [emailFocusColor, setEmailFocusColor] = useState("#E8E8E8");
  const [passwordFocusColor, setPasswordFocusColor] = useState("#E8E8E8");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShowed, setIsPasswordShowed] = useState(true);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleShowPasswordPress = () => {
    setIsPasswordShowed((show) => !show);
  };

  const onLogin = () => {
    const userCredentials = {
      email: email,
      password: password,
    };

    dispatch(loginDB(userCredentials));

    console.log(isLoggedIn);

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    isLoggedIn ? navigation.navigate("Home") : navigation.navigate("Login");
  }, [isLoggedIn]);

  return (
    <ImageBackground
      source={require("../../img/PhotoBG.jpg")}
      style={{ height: "100%" }}
    >
      <View style={{ flexGrow: 1 }}></View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={-220}
        >
          <View style={styles.registrationContainer}>
            <Text style={styles.text}>Увійти</Text>
            <TextInput
              placeholder="Адреса електронної пошти"
              style={{ ...styles.input, borderColor: emailFocusColor }}
              placeholderTextColor="#BDBDBD"
              onFocus={() => {
                setEmailFocusColor("#FF6C00");
              }}
              onBlur={() => {
                setEmailFocusColor("#E8E8E8");
              }}
              textContentType="emailAddress"
              value={email}
              onChangeText={setEmail}
            />

            <View style={styles.passwordInputContainer}>
              <TextInput
                placeholder="Пароль"
                style={{
                  ...styles.input,
                  marginBottom: 43,
                  borderColor: passwordFocusColor,
                }}
                placeholderTextColor="#BDBDBD"
                secureTextEntry={isPasswordShowed}
                onFocus={() => {
                  setPasswordFocusColor("#FF6C00");
                }}
                onBlur={() => {
                  setPasswordFocusColor("#E8E8E8");
                }}
                textContentType="newPassword"
                value={password}
                onChangeText={setPassword}
                maxLength={15}
              />
              <Pressable style={styles.showPasswordButton}>
                <Text
                  style={styles.passwordText}
                  onPress={handleShowPasswordPress}
                >
                  {isPasswordShowed ? "Показати" : "Приховати"}
                </Text>
              </Pressable>
            </View>
            <Pressable style={btn} onPress={onLogin}>
              <Text style={btn.text}>Увійти</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.bottomText}>
                {`Немає акаунту? `}
                <Text
                  style={styles.bottomTextLastWord}
                  onPress={() => navigation.navigate("Registration")}
                >
                  Зареєструватися
                </Text>
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
