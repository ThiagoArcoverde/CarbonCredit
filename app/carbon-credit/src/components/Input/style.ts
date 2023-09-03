import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
  input: {
    paddingHorizontal: 16,
    paddingVertical: 11,
    border: "none",
    backgroundColor: theme.colors.graySuperLight,
    width: "100%",
  },
  label: {
    fontSize: theme.fonts.md,
    marginBottom: 8,
    color: theme.colors.gray,
  },
  container: {},
});
