import React from "react";
import { ScrollView } from "react-native";

import { style } from "./style";

interface Props {
  children: React.ReactNode;
}

export const ActivityContainer: React.FC<Props> = ({ children }) => {
  return <ScrollView style={style.container}>{children}</ScrollView>;
};
