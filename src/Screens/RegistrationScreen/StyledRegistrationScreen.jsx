import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  text: {
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto-Bold",
    fontWeight: 500,
    letterSpacing: 0.3,
  },
  input: {
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    padding: 16,
    width: 343,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    fontSize: 16,
  },

  inputLastChild: {
    height: 50,
    marginBottom: 43,
    borderWidth: 1,
    padding: 16,
    width: 343,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    width: 343,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },

  bottomText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
  },

  passwordInputContainer: {
    position: "relative",
  },

  showPasswordButton: {
    position: "absolute",
    right: 16,
    ...Platform.select({
      ios: {
        top: 16,
      },
      android: {
        top: 13,
      },
    }),
  },

  passwordText: {
    color: "#1B4371",
    textAlign: "right",
    fontSize: 16,
  },

  registrationContainer: {
    backgroundColor: "#fff",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 45,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  addPhotoSpace: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  addPhotoSpaceIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 80,
    left: 107,
  },
});
