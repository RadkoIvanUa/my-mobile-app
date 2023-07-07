import {
  ImageBackground,
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

export default function LoginScreen() {
  const [emailFocusColor, setEmailFocusColor] = useState("#E8E8E8");
  const [passwordFocusColor, setPasswordFocusColor] = useState("#E8E8E8");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-220}
      >
        <ImageBackground
          source={require("../../img/PhotoBG.jpg")}
          style={{ height: "100%" }}
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
              />
              <Pressable style={styles.showPasswordButton}>
                <Text style={styles.passwordText}>Показати</Text>
              </Pressable>
            </View>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Увійти</Text>
            </Pressable>
            <Pressable>
              <Text style={styles.bottomText}>
                Немає акаунту?
                <Text> </Text>
                <Text style={styles.bottomTextLastWord}>Зареєструватися</Text>
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
