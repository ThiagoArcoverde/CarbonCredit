import React from "react";
import { View, Text } from "react-native";

import { style } from "./style";

interface Props {
  item: React.ReactNode;
  title: string;
  status: string;
  amount: number;
  carbon: number;
}

export const ActivityItem: React.FC<Props> = ({
  item,
  title,
  status,
  amount,
  carbon,
}) => {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        {item}
        <View style={style.titleContainer}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.status}>{status}</Text>
        </View>
      </View>

      <View style={style.amountContainer}>
        <Text style={style.amount}>{amount}</Text>
        <Text style={style.carbon}>{carbon}</Text>
      </View>
    </View>
  );
};
