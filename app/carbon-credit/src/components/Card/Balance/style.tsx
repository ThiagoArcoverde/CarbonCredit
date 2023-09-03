import { StyleSheet } from "react-native";
import { theme } from "../../../global/theme";

export const style = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
    borderRadius: 8,
  },
  text: {
    fontSize: theme.fonts.md,
    borderBottom: 9,
  },
  balanceContainer: {
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  balanceText: {
    fontSize: theme.fonts.lg,
  },
  balanceImage: {
    width: 14,
    height: 24,
  },
});
