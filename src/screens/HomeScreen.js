import React, { useState } from "react";
import { View } from "react-native";
import {
  SmallText,
  NormalText,
  MediumText,
  BigText
} from "../components/common/text";
import ContainerScroll from "../components/common/layout/ContainerScroll";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonIcon
} from "../components/common/buttons";
import {
  ImgContainer,
  ImgFullWidth,
  ImgRounded
} from "../components/common/images";
import CodeScrollSide from "../components/common/code-component/CodeScrollSide";

export default function HomeScreen() {
  const [number, addNumber] = useState(1);

  return (
    <ContainerScroll>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        <ButtonIcon onPress={() => console.log(123333)} name={"md-contact"} />
        <ButtonIcon name={"md-planet"} />
        <ButtonIcon name={"md-jet"} />
        <ButtonIcon name={"logo-facebook"} />
        <ButtonIcon name={"md-contact"} />
        <ButtonIcon name={"md-contact"} />
        <ButtonIcon name={"md-contact"} />
        <ButtonIcon name={"md-contact"} />
        <ButtonIcon name={"md-contact"} />
        <ButtonIcon name={"md-contact"} />
        <ButtonIcon name={"md-contact"} />
        <ButtonIcon name={"md-contact"} />
      </View>

      <ImgFullWidth
        big
        imageURL="https://mateusz-skibicki-blog.cdn.prismic.io/mateusz-skibicki-blog/73af4079af847cf9eac05d078a95f9a36b668c6a_jonathan-daniels-cdvg9f96kyg-unsplash.jpg"
      />
    </ContainerScroll>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
