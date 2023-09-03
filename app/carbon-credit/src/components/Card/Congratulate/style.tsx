import { StyleSheet } from "react-native";
import { theme } from "../../../global/theme";

export const style = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 8,
    padding: 16,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 1.25,
    shadowRadius: 5,
    flexDirection: "row",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  topText: {
    fontSize: theme.fonts.md,
    fontWeight: "600",
  },
  middleText: {
    fontSize: theme.fonts.xl,
  },
  middleSecondaryText: {
    fontSize: theme.fonts.lg,
  },
  bottomText: {
    fontSize: theme.fonts.md,
  },
});
