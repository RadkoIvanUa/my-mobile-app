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
import { useState, useEffect, useRef } from "react";
import DeleteBascket from "../../img/icons/IconsComponents/DeleteBascket";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function CreatePostsScreen() {
  const [isBtnDisbled, setIsBtnDisabled] = useState(true);
  const [photoName, setPhotoName] = useState("");
  const [photoLocation, setPhotoLocation] = useState("");
  const [location, setLocation] = useState(null);

  const [newPhotoUri, setNewPhotoUri] = useState("");

  const handleChange = () => {
    if (photoName.length === 1 || photoLocation.length === 1) {
      return setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  };

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
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(coords);
  };
  //-------------

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
                      setNewPhotoUri(uri);
                      await MediaLibrary.createAssetAsync(uri);
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
            <Image source={require({ newPhotoUri })} />
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
          onChange={handleChange}
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
            onChange={handleChange}
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
          <Text
            style={isBtnDisbled ? { ...btn.text, color: "#BDBDBD" } : btn.text}
            onPress={handleCreatePostPress}
          >
            Опублікувати
          </Text>
        </Pressable>
        <View style={styles.deletePosTBtnFlex}>
          <View style={styles.deletePostBtn}>
            <DeleteBascket />
          </View>
        </View>
      </View>
    </View>
  );

  //-----------------------------------------------------------
}
