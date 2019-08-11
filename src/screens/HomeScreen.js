import React from "react";
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

import ListUL from "../components/common/lists/ListUL";

const HomeScreen = () => {
  return (
    <ContainerScroll>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          marginBottom: 32
        }}
      >
        <ButtonIcon small name={"md-contact"} />
        <ButtonIcon name={"md-contact"} />
        <ButtonIcon big name={"md-contact"} />
        <ButtonIcon big name={"md-contact"} />
      </View>

      <ListUL
        title="Daaamn title"
        list={[
          "Lorem asd asd sdsdasda asd",
          "Lorem asd asd sdsdasda asd",
          "Lorem asd asd sdsdasda asd",
          "Lorem asd asd sdsdasda asd",
          "Lorem asd asd sdsdasda asd",
          "JavaScript lorem10 lorem10 lorem10 lorem10 lorem10"
        ]}
      />

      <ImgFullWidth
        big
        imageURL="https://mateusz-skibicki-blog.cdn.prismic.io/mateusz-skibicki-blog/73af4079af847cf9eac05d078a95f9a36b668c6a_jonathan-daniels-cdvg9f96kyg-unsplash.jpg"
      />
    </ContainerScroll>
  );
};

HomeScreen.navigationOptions = {
  header: null
};

export default HomeScreen;
