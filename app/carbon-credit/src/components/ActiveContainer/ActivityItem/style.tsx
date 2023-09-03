import { StyleSheet } from "react-native";

import { theme } from "../../../global/theme";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 4,
  },
  title: {
    fontSize: theme.fonts.sm,
  },
  status: {
    fontSize: theme.fonts.sm,
  },
  amountContainer: {
    gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  amount: {
    fontSize: theme.fonts.sm,
  },
  carbon: {
    fontSize: theme.fonts.sm,
  },
});
