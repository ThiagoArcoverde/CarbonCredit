import { View, Image } from "react-native";
import { BalanceCard } from "../../components/Card/Balance";
import { Header } from "../../components/Header";
import { style } from "./style";
import { TopBar } from "../../components/TopBar";
import { TopBarItem } from "../../components/TopBar/TopBarItem";

export const Home = () => {
  return (
    <View style={style.container}>
      <Header />
      <BalanceCard balance={450} />
      <TopBar>
        <TopBarItem
          image={
            <Image
              style={{ width: 30, height: 10 }}
              source={require("../../../assets/obb-logo.png")}
            />
          }
        />
        <TopBarItem
          image={
            <Image
              style={{ width: 30, height: 10 }}
              source={require("../../../assets/obb-logo.png")}
            />
          }
        />
        <TopBarItem
          image={
            <Image
              style={{ width: 30, height: 10 }}
              source={require("../../../assets/obb-logo.png")}
            />
          }
        />
        <TopBarItem
          image={
            <Image
              style={{ width: 30, height: 10 }}
              source={require("../../../assets/obb-logo.png")}
            />
          }
        />
      </TopBar>
    </View>
  );
};
