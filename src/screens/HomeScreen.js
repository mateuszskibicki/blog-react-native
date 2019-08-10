import React, { useState } from "react";
import {
  SmallText,
  NormalText,
  MediumText,
  BigText
} from "../components/common/text";
import ContainerScroll from "../components/common/layout/ContainerScroll";
import { ButtonPrimary, ButtonSecondary } from "../components/common/buttons";
import ImgContainer from "../components/common/images/ImgContainer";
import ImgFullWidth from "../components/common/images/ImgFullWidth";

export default function HomeScreen() {
  const [number, addNumber] = useState(1);

  return (
    <ContainerScroll>
      <ButtonPrimary center onPress={() => addNumber(number + 1)}>
        console!
      </ButtonPrimary>
      <ImgContainer imageURL="https://mateusz-skibicki-blog.cdn.prismic.io/mateusz-skibicki-blog/73af4079af847cf9eac05d078a95f9a36b668c6a_jonathan-daniels-cdvg9f96kyg-unsplash.jpg" />
      <ImgContainer
        small
        imageURL="https://mateusz-skibicki-blog.cdn.prismic.io/mateusz-skibicki-blog/73af4079af847cf9eac05d078a95f9a36b668c6a_jonathan-daniels-cdvg9f96kyg-unsplash.jpg"
      />
      <ImgContainer
        big
        imageURL="https://mateusz-skibicki-blog.cdn.prismic.io/mateusz-skibicki-blog/73af4079af847cf9eac05d078a95f9a36b668c6a_jonathan-daniels-cdvg9f96kyg-unsplash.jpg"
      />
      <ImgFullWidth imageURL="https://mateusz-skibicki-blog.cdn.prismic.io/mateusz-skibicki-blog/73af4079af847cf9eac05d078a95f9a36b668c6a_jonathan-daniels-cdvg9f96kyg-unsplash.jpg" />
      <ImgFullWidth
        small
        imageURL="https://mateusz-skibicki-blog.cdn.prismic.io/mateusz-skibicki-blog/73af4079af847cf9eac05d078a95f9a36b668c6a_jonathan-daniels-cdvg9f96kyg-unsplash.jpg"
      />
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
