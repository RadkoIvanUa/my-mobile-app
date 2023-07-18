import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";

import { styles } from "./StyledCommentsScreen";
import { StyledContainer } from "../../default-styles";
import { ScrollView } from "react-native";
import SendCommentButton from "../../img/icons/IconsComponents/SendCommentButton";

export default function CommentsScreen() {
  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={{ marginTop: 32 }}>
      <KeyboardAvoidingView
        behavior={"position"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : -150}
      >
        <View style={StyledContainer}>
          <View style={styles.commentedPhoto}></View>
          <ScrollView
            style={{ height: windowHeight - 490 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.visitorComment}>
              <View style={styles.commentsUserPhoto}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={require("../../img/PhotoBG.jpg")}
                ></Image>
              </View>
              <View style={styles.commentTextContainer}>
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, illo provident nisi repellendus animi dolore minima
                  incidunt facilis. Debitis, nostrum!
                </Text>
                <Text style={styles.commentDateNow}>
                  09 червня, 2020 | 08:40
                </Text>
              </View>
            </View>

            {/* Owner comment */}
            <View style={styles.ownerComment}>
              <View style={styles.commentsUserPhoto}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={require("../../img/PhotoBG.jpg")}
                ></Image>
              </View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.commentText}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, illo provident nisi repellendus animi dolore minima
                  incidunt facilis. Debitis, nostrum!
                </Text>
                <Text style={styles.commentDateNow}>
                  09 червня, 2020 | 08:40
                </Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Коментувати..."
              placeholderTextColor={"#BDBDBD"}
              style={styles.commentInput}
            ></TextInput>
            <View style={styles.sendCommentIconWrapper}>
              <Pressable>
                <SendCommentButton />
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
