import React from "react";
import ContainerScroll from "../components/common/layout/ContainerScroll";

import SmallText from "../components/common/text/SmallText";
import SmallBoldText from "../components/common/text/SmallBoldText";

import NormalText from "../components/common/text/NormalText";
import NormalBoldText from "../components/common/text/NormalBoldText";

import MediumText from "../components/common/text/MediumText";
import MediumBoldText from "../components/common/text/MediumBoldText";

import BigText from "../components/common/text/BigText";
import BigBoldText from "../components/common/text/BigBoldText";

export default function HomeScreen() {
  return (
    <ContainerScroll>
      <SmallText>SmallText</SmallText>
      <SmallText>SmallText</SmallText>
      <SmallText secondary>sss secondary</SmallText>
      <SmallBoldText>SmallBoldText</SmallBoldText>
      <SmallBoldText>SmallBoldText</SmallBoldText>
      <SmallBoldText secondary>SmallBoldText secondary</SmallBoldText>
      <NormalText>NormalText</NormalText>
      <NormalText>aa</NormalText>
      <NormalText>NormalText</NormalText>
      <NormalBoldText>NormalBoldText</NormalBoldText>
      <NormalBoldText>NormalBoldText</NormalBoldText>
      <MediumText>MediumText</MediumText>
      <MediumText>MediumText</MediumText>
      <MediumBoldText>MediumBoldText</MediumBoldText>
      <MediumBoldText>MediumBoldText</MediumBoldText>
      <BigText>BigText</BigText>
      <BigText>BigText</BigText>
      <BigBoldText>BigBoldText</BigBoldText>
      <BigBoldText>BigBoldText</BigBoldText>
    </ContainerScroll>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
