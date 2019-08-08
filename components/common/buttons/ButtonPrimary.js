import React from "react";
import PropTypes from "prop-types";
import { TouchableNativeFeedback, View, Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const ButtonPrimary = props => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View
        style={[
          styles.button,
          props.style,
          props.right && { alignSelf: "flex-end" },
          props.center && { alignSelf: "center" },
          props.block && { alignSelf: null, alignItems: "center" }
        ]}
      >
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: StylesMain.primaryGreen,
    borderRadius: 5,
    shadowColor: "#000",
    marginBottom: 24,
    ...StylesMain.shadow
  },
  text: {
    color: StylesMain.whiteTextColor,
    fontWeight: StylesMain.textBoldWeight,
    fontFamily: StylesMain.fontFamily,
    fontSize: 18,
    padding: 0
  }
});

ButtonPrimary.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  right: PropTypes.bool,
  center: PropTypes.bool,
  block: PropTypes.bool
};

export default ButtonPrimary;
