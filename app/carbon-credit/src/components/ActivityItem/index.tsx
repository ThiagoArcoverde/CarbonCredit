import React from "react";
import { Image, Text, View } from "react-native";
import { PartnerLogo } from "../PartnerLogo";
import { style } from "./style";

interface Props {
  carbonCredits: number;
  carbonAvoided: number;
}

export const ActivityItem: React.FC<Props> = ({
  carbonCredits,
  carbonAvoided,
}) => {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.line}>
          <PartnerLogo
            size="sm"
            image={
              <Image
                style={{ width: 30, height: 10 }}
                source={require("../../../assets/obb-logo.png")}
              />
            }
          />
          <Text>Carbon credits</Text>
          <Text>
            {carbonCredits > 0 ? "+" : "-"}
            {carbonCredits} CC
          </Text>
          <Text>Carbon emission avoided </Text>
          <Text>{carbonAvoided}KG CO2</Text>
        </View>
      </View>
    </View>
  );
};
