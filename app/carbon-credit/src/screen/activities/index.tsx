import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { style } from "./style";

export const Activities: React.FC = () => {
  return (
    <View style={style.container}>
      <Header name="Jude" />
      <Text>Activities</Text>
    </View>
  );
};
