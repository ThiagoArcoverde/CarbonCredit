// import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Router } from "./src/routes";
import { Home } from "./src/screen/home";
import { Activities } from "./src/screen/activities";

export default function App() {
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <StatusBar />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaView>
  );
}
