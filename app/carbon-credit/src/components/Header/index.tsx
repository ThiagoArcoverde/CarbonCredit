import { Image, Text, View } from "react-native";
import { style } from "./style";

export const Header = () => {
  return (
    <View style={style.container}>
      <Text>Hey, Jude</Text>
      <Image
        style={{ width: 24, height: 24 }}
        source={require("../../../assets/menu-icon.png")}
      />
    </View>
  );
};
