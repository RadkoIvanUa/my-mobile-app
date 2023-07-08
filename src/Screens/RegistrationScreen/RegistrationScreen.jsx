import {
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";

import { styles } from "./StyledRegistrationScreen";
import { useState } from "react";

export default function RegistrationScreen() {
  const [loginFocusColor, setLoginFocusColor] = useState("#E8E8E8");
  const [emailFocusColor, setEmailFocusColor] = useState("#E8E8E8");
  const [passwordFocusColor, setPasswordFocusColor] = useState("#E8E8E8");

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegistration = () => {
    const userRegistrationData = {
      login: login,
      email: email,
      password: password,
    };

    return console.log("userRegistrationData :>> ", userRegistrationData);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={"padding"} keyboardVerticalOffset={-140}>
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
              secureTextEntry={true}
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
              <Text style={styles.passwordText}>Показати</Text>
            </Pressable>
          </View>
          <Pressable style={styles.button} onPress={onRegistration}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.bottomText}>Вже є акаунт? Увійти</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
