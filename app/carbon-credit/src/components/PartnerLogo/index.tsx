import React from "react";
import { Image, View } from "react-native";
import { style } from "./style";

interface Props {
  image: React.ReactNode;
  size: "sm" | "md";
}

export const PartnerLogo: React.FC<Props> = ({ image, size }) => {
  return (
    <View
      style={[
        style.container,
        size === "sm" && { height: 56, width: 56 },
        size === "md" && { height: 64, width: 64 },
      ]}
    >
      {image}
    </View>
  );
};
