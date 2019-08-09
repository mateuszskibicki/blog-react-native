import React from "react";
import {
  SmallText,
  NormalText,
  MediumText,
  BigText
} from "../components/common/text";
import ContainerScroll from "../components/common/layout/ContainerScroll";
import ButtonPrimary from "../components/common/buttons/ButtonPrimary";

export default function HomeScreen() {
  return (
    <ContainerScroll>
      <SmallText>
        <MediumText>MediumText</MediumText>
      </SmallText>
      <SmallText>SmallText1</SmallText>
      <SmallText>SmallText</SmallText>
      <SmallText secondary>sss secondary</SmallText>
      <SmallText secondary bold>
        sss secondary and bold
      </SmallText>
      <NormalText>NormalText</NormalText>
      <NormalText>aa</NormalText>
      <NormalText>NormalText</NormalText>
      <MediumText>MediumText</MediumText>
      <MediumText>MediumText</MediumText>
      <BigText>BigText</BigText>
      <BigText>BigText</BigText>
      <BigText bold>BigText bold</BigText>
      <BigText secondary bold>
        BigText secondary bold
      </BigText>
      <ButtonPrimary>One two three</ButtonPrimary>
      <ButtonPrimary>One two three</ButtonPrimary>
      <ButtonPrimary right>One two three aa</ButtonPrimary>
      <ButtonPrimary block>One two three aa</ButtonPrimary>
      <ButtonPrimary right>One two three aa</ButtonPrimary>
      <ButtonPrimary center onPress={() => console.log(1244333)}>
        console!
      </ButtonPrimary>
    </ContainerScroll>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
