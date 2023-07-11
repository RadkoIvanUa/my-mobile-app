import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import { styles } from "./StyledCreatePostScreen";
import { StyledContainer } from "../../default-styles";
import UploadingPhotoIcon from "../../img/icons/IconsComponents/UploadingPhotoIcon";
import LocationIcon from "../../img/icons/IconsComponents/LocationIcon";
import { btn } from "../../default-styles";
import { useState } from "react";
import DeleteBascket from "../../img/icons/IconsComponents/DeleteBascket";

export default function CreatePostsScreen() {
  const [isBtnDisbled, setIsBtnDisabled] = useState(true);
  const [photoName, setPhotoName] = useState("");
  const [photoLocation, setPhotoLocation] = useState("");

  const handleChange = () => {
    if (photoName.length === 1 || photoLocation.length === 1) {
      return setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  };

  return (
    <>
      <View style={styles.screenHeader}>
        <Pressable style={styles.screenHeaderArrowLeftIcon}>
          <Image
            source={require("../../img/icons/arrow-left.png")}
            style={{ width: 24, height: 24 }}
          />
        </Pressable>
        <Text style={styles.screenHeaderText}>Створити публікацію</Text>
      </View>
      <View style={StyledContainer}>
        <View style={styles.uploadPhoto}>
          <View style={styles.uploadPhotoContainer}>
            <UploadingPhotoIcon />
          </View>
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
              style={
                isBtnDisbled ? { ...btn.text, color: "#BDBDBD" } : btn.text
              }
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
    </>
  );
}
