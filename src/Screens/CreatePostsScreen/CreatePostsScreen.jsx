import { Text, View, Image, TextInput, Pressable } from "react-native";
import { styles } from "./StyledCreatePostScreen";
import { StyledContainer } from "../../default-styles";

export default function CreatePostsScreen() {
  return (
    <>
      <View style={styles.screenHeader}>
        <Image source={require("../../img/icons/arrow-left.png")} />
        <Text style={styles.screenHeaderText}>Створити публікацію</Text>
      </View>
      <View style={StyledContainer}>
        <View>
          <Image></Image>
          <Text>Завантажте фото</Text>
        </View>
        <View>
          <TextInput placeholder="Назва..."></TextInput>
          <TextInput placeholder="Місцевість..."></TextInput>
          <Pressable>
            <Text>
              <Text>Зареєструватися</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
