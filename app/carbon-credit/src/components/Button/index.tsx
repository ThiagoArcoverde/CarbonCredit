import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./style";

export const Button: React.FC<TouchableOpacityProps> = ({ children }) => {
  return (
    <TouchableOpacity style={style.button}>
      <Text style={style.text}>{children}</Text>
    </TouchableOpacity>
  );
};
