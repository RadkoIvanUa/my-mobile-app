import { Platform } from "react-native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },

  userPhotoThumb: {
    width: 60,
    height: 60,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "red",
  },
  userName: {
    color: "#212121",
    fontSize: 13,
    fontWeight: 700,
  },
  userEmail: {
    color: "#212121CC",
    fontSize: 11,
  },

  profilePostList: {
    height: "88%",
  },

  profilePostItem: { marginBottom: 32 },

  postPhoto: {
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#F6F6F6",

    marginBottom: 8,
  },

  photoName: {
    color: "#212121",
    fontFamily: "Roboto-Bold",
    marginBottom: 10,
  },

  postInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },

  locationText: {
    textDecorationLine: "underline",
  },
  postInfoFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postLeftSideFlexItem: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
  },

  profileNavigation: {
    width: "100%",
    height: 73,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
  },

  profileNavigationWrapper: {
    width: 210,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  featcherIcon: {
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ProfileNavigationIconWrapper: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
