import React from "react";
import PropTypes from "prop-types";
import { TouchableNativeFeedback, View, Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const ButtonSecondary = props => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View
        style={[
          styles.button,
          props.style,
          props.right && { alignSelf: "flex-end" },
          props.center && { alignSelf: "center" },
          props.block && { alignSelf: null, alignItems: "center" },
          props.small && {
            paddingVertical: 4,
            paddingHorizontal: 8,
            marginBottom: 16
          }
        ]}
      >
        <Text
          style={[
            styles.text,
            props.small && { fontSize: 16, fontWeight: "400" }
          ]}
        >
          {props.children}
        </Text>
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
    backgroundColor: StylesMain.backgroundColor,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: StylesMain.secondaryTextColor,
    shadowColor: "#000",
    marginBottom: 24,
    ...StylesMain.shadow
  },
  text: {
    color: StylesMain.secondaryTextColor,
    fontWeight: StylesMain.textBoldWeight,
    fontFamily: StylesMain.fontFamily,
    fontSize: 18,
    padding: 0
  }
});

ButtonSecondary.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  right: PropTypes.bool,
  center: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool
};

export default React.memo(ButtonSecondary);
