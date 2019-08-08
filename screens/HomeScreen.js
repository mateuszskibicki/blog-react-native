import React from "react";
import ContainerScroll from "../components/common/layout/ContainerScroll";
import NormalText from "../components/common/text/NormalText";
import NormalBoldText from "../components/common/text/NormalBoldText";
import MediumText from "../components/common/text/MediumText";
import MediumBoldText from "../components/common/text/MediumBoldText";
import BigText from "../components/common/text/BigText";
import BigBoldText from "../components/common/text/BigBoldText";

export default function HomeScreen() {
  return (
    <ContainerScroll>
      <NormalText>NormalText</NormalText>
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
      <NormalText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        asperiores et totam necessitatibus, minus odio beatae vitae officia
        repellat officiis!
      </NormalText>
    </ContainerScroll>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
