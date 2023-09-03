import { Link } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";

interface Props {
  children?: React.ReactNode;
  title: string;
}

export const TopBar: React.FC<Props> = ({ children, title }) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.text}>{title}</Text>
        <Link style={style.link} to="/">
          see all
        </Link>
      </View>
      <View style={style.body}>{children}</View>
    </View>
  );
};
