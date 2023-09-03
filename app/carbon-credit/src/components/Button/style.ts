import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: theme.colors.blueGreen,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.colors.white,
  },
});
