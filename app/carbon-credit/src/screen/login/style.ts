import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  content: {
    width: "100%",
    gap: 32,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 11,
    border: "none",
    backgroundColor: theme.colors.graySuperLight,
    width: "100%",
  },
  button: {},
  text: {},
  image: {
    width: 64,
    height: 64,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textImage: {
    fontSize: theme.fonts.lg,
  },
  linkContainer: {
    position: "absolute",
    bottom: 58,
  },
  link: {
    textDecorationLine: "underline",
  },
});
