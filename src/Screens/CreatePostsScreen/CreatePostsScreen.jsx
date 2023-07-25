import {
  Text,
  View,
  TextInput,
  Pressable,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./StyledCreatePostScreen";
import { StyledContainer } from "../../default-styles";
import UploadingPhotoIcon from "../../img/icons/IconsComponents/UploadingPhotoIcon";
import LocationIcon from "../../img/icons/IconsComponents/LocationIcon";
import { btn } from "../../default-styles";
import { useState, useEffect } from "react";
import DeleteBascket from "../../img/icons/IconsComponents/DeleteBascket";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import ResetNewPhoto from "../../img/icons/IconsComponents/ResetNewPhoto";
import { useDispatch, useSelector } from "react-redux";
import { writeDataToFirestore } from "../../redux/posts/operations";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../config";
import { generateRandomString } from "../../helpers/generateUniqueString";
import { selectIsPostUploading } from "../../redux/posts/selectors";
import { ActivityIndicator } from "react-native";

export default function CreatePostsScreen({ navigation }) {
  const [isBtnDisbled, setIsBtnDisabled] = useState(true);
  const [photoName, setPhotoName] = useState("");
  const [photoLocation, setPhotoLocation] = useState("");
  const [location, setLocation] = useState(null);
  const [newPhotoUri, setNewPhotoUri] = useState("");
  const [isPostUploading, setIsPostUploading] = useState(false);

  const dispatch = useDispatch();

  // Camera
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  // Location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  const handleCreatePostPress = async () => {
    setIsPostUploading(true);
    let getLocation = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: getLocation.coords.latitude,
      longitude: getLocation.coords.longitude,
    };
    setLocation(coords);
    const photoNameForStorage =
      photoName.replaceAll(" ", "") + generateRandomString(10);
    const imagesRef = ref(storage, `images/${photoNameForStorage}`);
    const response = await fetch(newPhotoUri);
    const file = await response.blob();

    uploadBytes(imagesRef, file).then(() => {
      getDownloadURL(ref(storage, `images/${photoNameForStorage}`)).then(
        (url) => {
          const newPost = {
            photoName: photoName,
            photoLocation: photoLocation,
            location: location,
            url: url,
          };
          dispatch(writeDataToFirestore(newPost));
        }
      );
    });
    navigation.navigate("Posts");
    setPhotoName("");
    setPhotoLocation("");
    setNewPhotoUri("");
    setIsBtnDisabled(true);
    setIsPostUploading(false);
  };

  return (
    <View style={{ ...StyledContainer, paddingTop: 32 }}>
      <View style={styles.uploadPhoto}>
        {hasPermission === null || hasPermission === false ? (
          <View
            style={{
              ...styles.uploadPhotoContainer,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <UploadingPhotoIcon
              cameraFill={"rgba(189, 189, 189, 1)"}
              circleFill={"rgba(255, 255, 255, 1)"}
            />
          </View>
        ) : (
          <View style={styles.uploadPhotoContainer}>
            {newPhotoUri !== "" ? (
              <View>
                <Image
                  source={{
                    uri: newPhotoUri,
                  }}
                  style={{ width: "100%", height: "100%" }}
                />

                <Pressable
                  onPress={() => {
                    setNewPhotoUri("");
                    setIsBtnDisabled(true);
                  }}
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                  }}
                >
                  <ResetNewPhoto />
                </Pressable>
              </View>
            ) : (
              <Camera style={styles.camera} type={type} ref={setCameraRef}>
                <View style={styles.photoView}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                      if (cameraRef) {
                        const { uri } = await cameraRef.takePictureAsync({
                          quality: 1,
                          base64: true,
                        });
                        await MediaLibrary.createAssetAsync(uri);
                        setNewPhotoUri(uri);
                        setIsBtnDisabled(false);
                      }
                    }}
                  >
                    <UploadingPhotoIcon
                      circleFill={"rgba(255, 255, 255, 0.3)"}
                      cameraFill={"rgba(189, 189, 189, 1)"}
                    />
                  </TouchableOpacity>
                </View>
              </Camera>
            )}
          </View>
        )}

        <Text style={styles.uploadPhotoBottomText}>Завантажте фото</Text>
      </View>
      <View>
        <TextInput
          placeholder="Назва..."
          placeholderTextColor={"#BDBDBD"}
          style={{ ...styles.textInput, marginBottom: 16 }}
          value={photoName}
          onChangeText={setPhotoName}
        ></TextInput>

        <View style={{ position: "relative" }}>
          <TextInput
            placeholder="Місцевість..."
            placeholderTextColor={"#BDBDBD"}
            style={{
              ...styles.textInput,
              marginBottom: 32,
              paddingLeft: 28,
            }}
            value={photoLocation}
            onChangeText={setPhotoLocation}
          ></TextInput>
          <View style={styles.locationIcon}>
            <LocationIcon />
          </View>
        </View>
        <Pressable
          style={
            isBtnDisbled
              ? {
                  ...btn,
                  backgroundColor: "#F6F6F6",
                  width: "100%",
                  ...Platform.select({
                    ios: {
                      marginBottom: 180,
                    },
                    android: {
                      marginBottom: 100,
                    },
                  }),
                }
              : {
                  ...btn,
                  width: "100%",
                  ...Platform.select({
                    ios: {
                      marginBottom: 180,
                    },
                    android: {
                      marginBottom: 100,
                    },
                  }),
                }
          }
          disabled={isBtnDisbled}
        >
          {isPostUploading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text
              style={
                isBtnDisbled ? { ...btn.text, color: "#BDBDBD" } : btn.text
              }
              onPress={handleCreatePostPress}
            >
              Опублікувати
            </Text>
          )}
        </Pressable>

        <View style={styles.deletePosTBtnFlex}>
          <Pressable
            style={
              isBtnDisbled
                ? styles.deletePostBtn
                : { ...styles.deletePostBtn, backgroundColor: "#FF6C00" }
            }
            onPress={() => {
              setIsBtnDisabled(true);
              setPhotoLocation("");
              setPhotoName("");
            }}
          >
            <DeleteBascket stroke={isBtnDisbled ? "#BDBDBD" : "#fff"} />
          </Pressable>
        </View>
      </View>
    </View>
  );

  //-----------------------------------------------------------
}
