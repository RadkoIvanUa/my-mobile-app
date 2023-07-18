import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  uploadPhoto: {
    marginBottom: 32,
  },
  uploadPhotoContainer: {
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    marginBottom: 8,
    overflow: "hidden",
  },

  uploadPhotoBottomText: {
    color: "#BDBDBD",
  },

  textInput: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    paddingBottom: 16,
    paddingTop: 16,
  },

  locationIcon: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: 13,
      },
      android: { top: 18 },
    }),
  },

  deletePosTBtnFlex: {
    display: "flex",
    alignItems: "center",
  },

  deletePostBtn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  //---------------------
  camera: { flex: 1, width: "100%", height: "100%" },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: { justifyContent: "center" },
});
