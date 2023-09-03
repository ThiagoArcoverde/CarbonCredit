import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./src/screen/login";
import { Home } from "./src/screen/home";

export default function App() {
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <Home />
    </SafeAreaView>
  );
}
