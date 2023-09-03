import React from "react";
import { Image, Text, View } from "react-native";
import { style } from "./style";

interface Props {
  name: string;
}

export const Header: React.FC<Props> = ({ name }) => {
  return (
    <View style={style.container}>
      <Text>Hey, {name}</Text>
      <Image
        style={{ width: 24, height: 24 }}
        source={require("../../../assets/menu-icon.png")}
      />
    </View>
  );
};
