import React from "react";
import PropTypes from "prop-types";
import { TouchableNativeFeedback, View, Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const ButtonSecondary = ({
  onPress,
  children,
  style,
  right,
  noContainer,
  center,
  block,
  small,
  mb0
}) => {
  //check if necessary exists
  if (
    !children ||
    !(typeof children === "string" || typeof children === "number")
  )
    return null;

  //return component
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          styles.button,
          style,
          right && { alignSelf: "flex-end" },
          noContainer && { alignSelf: null, flex: 0 },
          center && { alignSelf: "center" },
          block && {
            alignSelf: null,
            alignItems: "center",
            paddingVertical: 16
          },
          small && {
            paddingVertical: 4,
            paddingHorizontal: 8
          },
          mb0 && { marginBottom: 0 }
        ]}
      >
        <Text style={[styles.text, small && { fontSize: 14 }]}>{children}</Text>
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
    marginBottom: 16,
    ...StylesMain.shadow
  },
  text: {
    color: StylesMain.secondaryTextColor,
    fontWeight: StylesMain.textBoldWeight,
    fontFamily: StylesMain.fontFamily,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 0,
    padding: 0
  }
});

ButtonSecondary.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  right: PropTypes.bool,
  noContainer: PropTypes.bool,
  center: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  mb0: PropTypes.bool
};

export default React.memo(ButtonSecondary);
