import React from "react";
import { Image, View } from "react-native";
import { style } from "./style";

interface Props {
  image: React.ReactNode;
}

export const TopBarItem: React.FC<Props> = ({ image }) => {
  return <View style={style.container}>{image}</View>;
};
