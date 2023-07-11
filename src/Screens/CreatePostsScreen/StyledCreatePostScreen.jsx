import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenHeader: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.3)",
    paddingTop: 55,
    paddingBottom: 11,
    position: "relative",
    marginBottom: 32,
  },

  screenHeaderText: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
  },

  screenHeaderArrowLeftIcon: {
    position: "absolute",
    bottom: 10,
    left: 16,
  },

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
});
