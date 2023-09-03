import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  title: {
    fontWeight: "600",
    fontSize: theme.fonts.md,
    marginTop: 32,
    marginBottom: 16,
  },
  activities: {
    flexDirection: "row",
  },
});
