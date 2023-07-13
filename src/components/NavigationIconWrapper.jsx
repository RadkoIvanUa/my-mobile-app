import { View } from "react-native";
import { styles } from "./StyledNavigationIconWrapper";

export default function NavigationIconWrapper({ children }) {
  return <View style={styles.navigationIconWrapper}>{children}</View>;
}
