import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  container: {
    gap: 24,
    marginTop: 32,
  },
  text: {
    fontWeight: "500",
    fontSize: theme.fonts.md,
  },
  link: {
    textDecorationLine: "underline",
    fontSize: theme.fonts.sm,
  },
});
