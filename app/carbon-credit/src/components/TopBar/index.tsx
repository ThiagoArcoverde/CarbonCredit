import { Link } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";

interface Props {
  children: React.ReactNode;
}

export const TopBar: React.FC<Props> = ({ children }) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text>Connected Partners</Text>
        <Link to="/">See all</Link>
      </View>
      <View style={style.body}>{children}</View>
    </View>
  );
};
