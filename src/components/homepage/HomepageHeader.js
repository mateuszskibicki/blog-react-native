import React from "react";
import { Asset } from "expo-asset";
// import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { ImgRounded } from "../common/images";
import { NormalText } from "../common/text";

const HomepageHeader = () => {
  const profilePhotoURI = Asset.fromModule(
    require("../../../assets/images/profile_photo.jpg")
  ).uri;

  return (
    <View style={styles.container}>
      <ImgRounded imageURL={profilePhotoURI} small />
      <NormalText mb0>
        Hi! I'm Mateusz Skibicki, I live in Manchester and work as a Software
        Engineer in Musclefood. I work with Full-Stack Javascript technologies.
        I'm a coffee addict, I have 3 cats and I love good metalcore music. This
        is my blog about Full-Stack Javascript web and mobile technologies.
      </NormalText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 32
  }
});

//HomepageHeader.propTypes = {};

export default React.memo(HomepageHeader);
