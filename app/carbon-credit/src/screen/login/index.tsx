import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { style } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "@react-navigation/native";
import { useNavigation, ParamListBase } from "@react-navigation/native";

export const Login: React.FC<any> = () => {
  const navigation = useNavigation();
  function signIn() {
    navigation.navigate("Home" as never);
  }

  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.imageContainer}>
          <Image
            style={style.image}
            source={require("../../../assets/icon.png")}
          />
          <Text style={style.textImage}>carbon credit</Text>
        </View>
        <Input label="E-mail" />
        <Input label="Password" />
        <Button onPress={signIn}>Login</Button>
      </View>
      <Text style={style.linkContainer}>
        Don't have an account?{" "}
        <Link to="/register" style={style.link}>
          register here
        </Link>
      </Text>
    </View>
  );
};
