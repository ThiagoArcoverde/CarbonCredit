import React, { InputHTMLAttributes } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { style } from "./style";

interface InputProps extends InputHTMLAttributes<TextInputProps> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <View style={style.container}>
      {label && <Text style={style.label}>{label}</Text>}
      <TextInput style={style.input} />
    </View>
  );
};
