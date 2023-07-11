import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenHeader: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.3)",
    paddingTop: 55,
    paddingBottom: 11,
    position: "relative",
    marginBottom: 32,
    zIndex: 10000,
    backgroundColor: "#fff",
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

  commentedPhoto: {
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",

    marginBottom: 32,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  visitorComment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  commentsUserPhoto: {
    width: 28,
    height: 28,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 28,
    overflow: "hidden",
  },
  commentTextContainer: {
    width: 300,
    height: "auto",
    padding: 16,
    borderBottomEndRadius: 6,
    borderBottomLeftRadius: 6,
    borderTopEndRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },

  commentText: {
    fontSize: 13,
  },

  commentDateNow: {
    textAlign: "right",
    color: "#BDBDBD",
    fontSize: 10,
  },

  ownerComment: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  inputWrapper: {
    position: "absolute",
    bottom: -80,
    left: 16,
    width: "100%",
  },

  commentInput: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 16,
    borderRadius: 70,
  },

  sendCommentIconWrapper: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: 8,
        right: 8,
      },
      android: { top: 13, right: 8 },
    }),
  },
});
