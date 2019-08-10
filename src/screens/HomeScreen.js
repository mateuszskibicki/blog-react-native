import React, { useState } from "react";
import {
  SmallText,
  NormalText,
  MediumText,
  BigText
} from "../components/common/text";
import ContainerScroll from "../components/common/layout/ContainerScroll";
import { ButtonPrimary, ButtonSecondary } from "../components/common/buttons";

export default function HomeScreen() {
  const [number, addNumber] = useState(1);

  return (
    <ContainerScroll>
      <ButtonPrimary center onPress={() => addNumber(number + 1)}>
        console!
      </ButtonPrimary>
    </ContainerScroll>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
