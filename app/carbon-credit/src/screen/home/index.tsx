import { View, Image, Text } from "react-native";
import { BalanceCard } from "../../components/Card/Balance";
import { Header } from "../../components/Header";
import { style } from "./style";
import { TopBar } from "../../components/TopBar";

import { CongratulateCard } from "../../components/Card/Congratulate";
import { PartnerLogo } from "../../components/PartnerLogo";

import { ActivityContainer } from "../../components/ActiveContainer";
import { ActivityItem } from "../../components/ActiveContainer/ActivityItem";

export const Home = () => {
  return (
    <View style={style.container}>
      <Header name="Jude" />
      <BalanceCard balance={450} />
      <TopBar title="Connected partners">
        <PartnerLogo
          size="md"
          image={
            <Image
              style={{ width: 30, height: 10 }}
              source={require("../../../assets/obb-logo.png")}
            />
          }
        />
        <PartnerLogo
          size="md"
          image={
            <Image
              style={{ width: 30, height: 10 }}
              source={require("../../../assets/obb-logo.png")}
            />
          }
        />
        <PartnerLogo
          size="md"
          image={
            <Image
              style={{ width: 30, height: 10 }}
              source={require("../../../assets/obb-logo.png")}
            />
          }
        />
        <PartnerLogo
          size="md"
          image={
            <Image
              style={{ width: 30, height: 10 }}
              source={require("../../../assets/obb-logo.png")}
            />
          }
        />
      </TopBar>
      <Text style={style.title}>Emissions</Text>
      <CongratulateCard />

      <TopBar title="Activities">
        <ActivityContainer>
          <ActivityItem
            item={
              <PartnerLogo
                size="sm"
                image={
                  <Image source={require("../../../assets/obb-logo.png")} />
                }
              />
            }
            title="Carbon credits"
            status="Carbon emmission avoided"
            amount={5}
            carbon={2}
          />
        </ActivityContainer>
      </TopBar>
    </View>
  );
};
