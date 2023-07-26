import {
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";

import { styles } from "./StyledRegistrationScreen";
import { btn } from "../../default-styles";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerDB } from "../../redux/auth/operations";
import {
  selecIsGoingToLogIn,
  selectIsLoggedIn,
} from "../../redux/auth/selectors";
import { ActivityIndicator } from "react-native";

export default function RegistrationScreen({ navigation }) {
  const [loginFocusColor, setLoginFocusColor] = useState("#E8E8E8");
  const [emailFocusColor, setEmailFocusColor] = useState("#E8E8E8");
  const [passwordFocusColor, setPasswordFocusColor] = useState("#E8E8E8");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShowed, setIsPasswordShowed] = useState(true);
  const [isBtnDisbled, setIsBtnDisabled] = useState(true);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isGoingToLogIn = useSelector(selecIsGoingToLogIn);

  useEffect(() => {
    email === "" || password === ""
      ? setIsBtnDisabled(true)
      : setIsBtnDisabled(false);
  }, [email, password]);

  const handleShowPasswordPress = () => {
    setIsPasswordShowed((show) => !show);
  };

  const onRegistration = () => {
    const newUser = {
      email: email,
      login: login,
      password: password,
    };
    dispatch(registerDB(newUser));
    navigation.navigate("Home");

    setEmail("");
    setPassword("");
    setLogin("");
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
          keyboardVerticalOffset={-140}
        >
          <View style={styles.registrationContainer}>
            <View style={styles.addPhotoSpace}>
              <Image
                style={styles.addPhotoSpaceIcon}
                source={require("../../img/icons/add.png")}
              />
            </View>
            <Text style={styles.text}>Реєстрація</Text>
            <TextInput
              placeholder="Логін"
              style={{ ...styles.input, borderColor: loginFocusColor }}
              placeholderTextColor="#BDBDBD"
              onFocus={() => {
                setLoginFocusColor("#FF6C00");
              }}
              onBlur={() => {
                setLoginFocusColor("#E8E8E8");
              }}
              textContentType="username"
              value={login}
              onChangeText={setLogin}
            />
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
            <Pressable
              style={
                isBtnDisbled
                  ? {
                      ...btn,
                      backgroundColor: "#F6F6F6",
                    }
                  : btn
              }
              disabled={isBtnDisbled}
              onPress={onRegistration}
            >
              {isGoingToLogIn ? (
                <ActivityIndicator size="small" color="#FF6C00" />
              ) : (
                <Text style={btn.text}>Зареєстуватися</Text>
              )}
            </Pressable>
            <Pressable>
              <Text
                style={styles.bottomText}
                onPress={() => navigation.navigate("Login")}
              >
                Вже є акаунт? Увійти
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
