import {
  Text,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { styles } from "../LoginScreen/StyledLoginScreen";
import { useState } from "react";
import { btn } from "../../default-styles";

export default function LoginScreen() {
  const [emailFocusColor, setEmailFocusColor] = useState("#E8E8E8");
  const [passwordFocusColor, setPasswordFocusColor] = useState("#E8E8E8");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    const loginedUserData = {
      email: email,
      password: password,
    };

    return console.log("loginedUserData :>> ", loginedUserData);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={"padding"} keyboardVerticalOffset={-220}>
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
          <Pressable style={btn} onPress={onLogin}>
            <Text style={btn.text}>Увійти</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.bottomText}>
              Немає акаунту?
              <Text style={styles.bottomTextLastWord}>Зареєструватися</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
