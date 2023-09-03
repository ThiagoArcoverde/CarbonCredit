import React from "react";
import { Image, Text, View } from "react-native";
import { style } from "./style";

export const CongratulateCard: React.FC = () => {
  return (
    <View style={style.container}>
      <Image
        style={{ width: 84, height: 76 }}
        source={require("../../../../assets/carbon-emissed.png")}
      />
      <View style={style.content}>
        <Text style={style.topText}>congratulations!</Text>
        <Text style={style.middleText}>
          6kg CO<Text style={style.middleSecondaryText}>2</Text>
        </Text>
        <Text style={style.bottomText}>carbon emission saved</Text>
      </View>
    </View>
  );
};
