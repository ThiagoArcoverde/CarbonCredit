import React from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { style } from "./style";
import { theme } from "../../../global/theme";

interface Props {
  balance: number;
}

export const BalanceCard: React.FC<Props> = ({ balance }) => {
  return (
    <LinearGradient
      style={style.container}
      colors={[theme.colors.lightGreen, theme.colors.blueGreen]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
    >
      <Text style={style.text}>Total carbon credits</Text>
      <View style={style.balanceContainer}>
        <Image
          style={style.balanceImage}
          source={require("../../../../assets/carbon-money.png")}
        />
        <Text style={style.balanceText}>{balance}</Text>
      </View>
    </LinearGradient>
  );
};
