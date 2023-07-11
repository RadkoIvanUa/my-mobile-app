import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  profileWrapper: {
    backgroundColor: "#fff",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 92,
    paddingBottom: 45,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 150,
  },

  photoSpace: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  removeUserPhotoIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 75,
    left: 100,
  },

  profileImg: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },

  logOutIcon: {
    position: "absolute",
    top: 22,
    right: 16,
  },

  profilePostItem: { marginBottom: 32 },

  postPhoto: {
    width: 343,
    height: 240,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#F6F6F6",

    marginBottom: 8,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

  postComents: {},

  postLikes: {},

  postLocation: {},

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
