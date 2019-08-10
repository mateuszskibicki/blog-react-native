import React, { useState } from "react";
import {
  SmallText,
  NormalText,
  MediumText,
  BigText
} from "../components/common/text";
import ContainerScroll from "../components/common/layout/ContainerScroll";
import { ButtonPrimary, ButtonSecondary } from "../components/common/buttons";
import { ImgContainer, ImgFullWidth } from "../components/common/images";
import CodeScrollSide from "../components/common/code-component/CodeScrollSide";

export default function HomeScreen() {
  const [number, addNumber] = useState(1);

  return (
    <ContainerScroll>
      <NormalText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
        sapiente?
      </NormalText>
      <BigText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
        sapiente?
      </BigText>
      <ButtonPrimary center onPress={() => addNumber(number + 1)}>
        console!
      </ButtonPrimary>
      <ButtonSecondary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        error!
      </ButtonSecondary>
      <ButtonPrimary>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        error!
      </ButtonPrimary>
      <CodeScrollSide
        code={`
<View style={styles.helpContainer}>
  <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
    <Text style={styles.helpLinkText}>
      Help, it didn’t automatically reload!
    </Text>
  </TouchableOpacity>
</View>
      `}
      />
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
