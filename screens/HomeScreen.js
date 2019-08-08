import React from "react";
import {
  SmallText,
  SmallBoldText,
  NormalText,
  NormalBoldText,
  MediumText,
  MediumBoldText,
  BigText,
  BigBoldText
} from "../components/common/text";
import ContainerScroll from "../components/common/layout/ContainerScroll";
import ButtonPrimary from "../components/common/buttons/ButtonPrimary";

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
      <ButtonPrimary>One two three</ButtonPrimary>
      <ButtonPrimary>One two three</ButtonPrimary>
      <ButtonPrimary right>One two three aa</ButtonPrimary>
      <ButtonPrimary block>One two three aa</ButtonPrimary>
      <ButtonPrimary right>One two three aa</ButtonPrimary>
      <ButtonPrimary center onPress={() => console.log(123)}>
        console!
      </ButtonPrimary>
    </ContainerScroll>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
